/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const KNOWLEDGE_BASE = {
  about: "Balvatika is a premium pre-school focused on play-based holistic growth.",
  ratio: "We maintain a strict 1:8 teacher-to-child ratio for personalized attention.",
  curriculum: "Our curriculum is inspired by the Balvatika framework, focusing on sensory, social, and cognitive development.",
  safety: "Our campus is equipped with 24/7 CCTV, child-safe infrastructure, and mandatory first-aid certified staff.",
  age_groups: "We have three levels: Balvatika 1 (3-4y), Balvatika 2 (4-5y), and Balvatika 3 (5-6y).",
  timing: "School hours are 9:00 AM to 1:00 PM, Monday to Friday.",
};

let ai: GoogleGenAI | null = null;

function getAI() {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

export async function askSmartFAQ(question: string) {
  try {
    const genAI = getAI();
    const result = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Question: ${question}`,
      config: {
        systemInstruction: `You are the AI assistant for Balvatika Pre-school. 
        Answer the parent's question based on this knowledge base: ${JSON.stringify(KNOWLEDGE_BASE)}.
        If the information is not in the knowledge base, politely say you'll have a human representative contact them.
        Keep answers warm, concise, and professional.`,
      },
    });
    return result.text;
  } catch (error) {
    console.error("Smart FAQ error:", error);
    return "I'm having trouble connecting right now, but please reach out to our admission cell directly!";
  }
}
