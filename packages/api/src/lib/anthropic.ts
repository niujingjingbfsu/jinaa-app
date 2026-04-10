import Anthropic from "@anthropic-ai/sdk";

// Singleton Anthropic client — shared across server requests
let _client: Anthropic | null = null;

export function getAnthropicClient(): Anthropic {
  if (!_client) {
    const apiKey = process.env["ANTHROPIC_API_KEY"];
    if (!apiKey) {
      throw new Error("ANTHROPIC_API_KEY environment variable is not set");
    }
    _client = new Anthropic({ apiKey });
  }
  return _client;
}

export const MODELS = {
  fast: "claude-haiku-4-5-20251001",
  balanced: "claude-sonnet-4-6",
} as const;
