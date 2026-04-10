import { createAnthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";

export const runtime = "nodejs";
export const maxDuration = 30;

const anthropic = createAnthropic({
  apiKey: process.env["ANTHROPIC_API_KEY"] ?? "",
});

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: ChatMessage[] };

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    system: "You are a helpful AI assistant for the JINAA platform.",
    messages,
  });

  return result.toTextStreamResponse();
}
