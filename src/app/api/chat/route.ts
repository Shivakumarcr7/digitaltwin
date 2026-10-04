import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1]?.content || "";

    const model = genAI.getGenerativeModel({ model: "gemini-3.8-flash" });

    const prompt = `You are the official Tachyon Neural Assistant for the Artificial Intelligence and Machine Learning (AI & ML) Department at P.E.S. College of Engineering (PESCE), Mandya.
    
    Context on Faculty:
    - Dr. Umesh D R is a Professor (CAS) & Controller of Examination (COE) in the AI & ML department.
    - Prof. Chetan Kumar V is an Assistant Professor in the AI & ML department.
    
    Answer the user's questions about the department, faculty, projects, and the college accurately and professionally.
    
    User question: "${lastMessage}"`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });
  } catch (error: any) {
    console.error("Chat API Error:", error.message);
    
    if (error.message.includes("503") || error.message.includes("high demand")) {
      return NextResponse.json(
        { reply: "My neural core is currently experiencing high demand. Please wait a moment and try asking again." }, 
        { status: 503 }
      );
    }

    return NextResponse.json({ reply: "Neural connection error. Please try again." }, { status: 500 });
  }
}
