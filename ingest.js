import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { pipeline } from '@xenova/transformers';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function ingestData() {
    console.log("Starting data ingestion with all-MiniLM-L6-v2...");

    // Initialize hugging face model (will download the first time)
    const generateEmbedding = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
        quantized: false,
    });

    // 1. Read plan.md
    const planPath = path.join(__dirname, 'plan.md');
    const planContent = fs.readFileSync(planPath, 'utf8');

    // 2. Chunk the data based on markdown headers. 
    const roughChunks = planContent.split(/(?=^## )/gm);

    const chunks = roughChunks
        .map(chunk => chunk.trim())
        .filter(chunk => chunk.length > 50 && !chunk.includes('Please fill out the blanks/placeholders below'));

    console.log(`Found ${chunks.length} chunks to process.`);

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        try {
            console.log(`Processing chunk ${i + 1}/${chunks.length}...`);

            // 3. Generate embeddings
            const output = await generateEmbedding(chunk, {
                pooling: 'mean',
                normalize: true,
            });
            const embedding = Array.from(output.data);

            // 4. Store in Supabase
            const { error } = await supabase
                .from('portfolio_knowledge')
                .insert({
                    content: chunk,
                    embedding: embedding
                });

            if (error) {
                console.error(`Error inserting chunk ${i + 1}:`, error);
            }
        } catch (err) {
            console.error(`Failed to process chunk ${i + 1}:`, err);
        }
    }

    console.log("Ingestion complete!");
}

ingestData();
