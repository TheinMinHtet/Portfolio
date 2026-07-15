import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { pipeline, env } from '@xenova/transformers';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const aiModel = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(__dirname));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Set Xenova cache directory to /tmp to bypass Vercel's read-only file system
env.cacheDir = '/tmp/.cache';

let generateEmbedding;

// Pre-load the Xenova embedding model
(async () => {
    console.log("Loading Xenova embedding model...");
    generateEmbedding = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
        quantized: false,
    });
    console.log("Model loaded successfully.");
})();

app.post('/api/chat', async (req, res) => {
    try {
        const { query } = req.body;
        if (!query) return res.status(400).json({ error: "Query is required" });
        if (!generateEmbedding) return res.status(503).json({ error: "Model is loading, please try again." });

        console.log(`Received query: "${query}"`);

        // Convert user question to embedding
        const output = await generateEmbedding(query, {
            pooling: 'mean',
            normalize: true,
        });
        const embedding = Array.from(output.data);

        // Find relevant information in Supabase
        const { data, error } = await supabase.rpc('match_portfolio_knowledge', {
            query_embedding: embedding,
            match_threshold: 0.2, // Lower threshold to ensure matches
            match_count: 5
        });

        if (error) {
            console.error("Supabase RPC Error:", error);
            throw error;
        }

        let contextText = "No specific information found in the portfolio data.";
        if (data && data.length > 0) {
            contextText = data.map(item => item.content).join("\n---\n");
        }

        const prompt = `You are a helpful and professional AI assistant for my portfolio website. 
Answer the user's question based on the following context retrieved from my portfolio data. 
If the answer is not in the context, politely inform the user that you don't have that specific information.

CRITICAL INSTRUCTION: Keep your response concise, clear, and of normal conversational length (not too long). When listing things like achievements, projects, or skills, ALWAYS use bullet points or dashes (-) for each item.

Context:
${contextText}

User Question: ${query}`;

        const result = await aiModel.generateContent(prompt);
        const aiReply = result.response.text();

        res.json({ reply: aiReply });
    } catch (error) {
        console.error("Chat API Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

export default app;
