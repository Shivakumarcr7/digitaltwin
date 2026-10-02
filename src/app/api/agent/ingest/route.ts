import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
// Initialize Supabase only if keys are present to prevent build errors
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  if (!supabase) return NextResponse.json({ success: false, error: "Database not configured" }, { status: 500 });

  try {
    const { userId, agentId, updateText, sourceType } = await req.json();

    // 1. LLM Processing Layer: Extract structured memory metadata
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
      Analyze this user update and extract the primary category and a concise structured memory.
      Update: "${updateText}"
      Respond in strictly JSON format: { "category": "Project|Skill|Goal|Learning|Achievement|Reflection", "structured_content": "..." }
    `;
    
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().replace(/```json|```/g, '');
    const { category, structured_content } = JSON.parse(responseText);

    // 2. Embedding Layer: Generate vector for semantic search
    const embeddingModel = genAI.getGenerativeModel({ model: "text-embedding-004" });
    const embeddingResult = await embeddingModel.embedContent(structured_content);
    const embedding = embeddingResult.embedding.values;

    // 3. Storage Layer: Save to Supabase
    const { data, error } = await supabase.from('memories').insert({
      agent_id: agentId,
      content: structured_content,
      source_type: sourceType,
      category: category,
      visibility: 'private',
      embedding: embedding
    }).select().single();

    if (error) throw error;

    return NextResponse.json({ success: true, memory: data });
  } catch (error) {
    console.error("Ingestion Pipeline Error:", error);
    return NextResponse.json({ success: false, error: "Failed to process update" }, { status: 500 });
  }
}
