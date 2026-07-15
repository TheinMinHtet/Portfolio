-- Enable the vector extension
create extension if not exists vector;

-- Create a table for storing your portfolio documents
create table if not exists portfolio_knowledge (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  embedding vector(384) -- all-MiniLM-L6-v2 uses 384 dimensions
);

-- Create a function to search for similar vectors
create or replace function match_portfolio_knowledge (
  query_embedding vector(384),
  match_threshold float,
  match_count int
)
returns table (
  id uuid,
  content text,
  similarity float
)
language sql stable
as $$
  select
    portfolio_knowledge.id,
    portfolio_knowledge.content,
    1 - (portfolio_knowledge.embedding <=> query_embedding) as similarity
  from portfolio_knowledge
  where 1 - (portfolio_knowledge.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;
