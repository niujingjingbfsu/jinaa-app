import { describe, expect, it } from "vitest";
import { appRouter } from "../router";

describe("health router", () => {
  const caller = appRouter.createCaller({});

  it("ping returns ok status", async () => {
    const result = await caller.health.ping();
    expect(result.status).toBe("ok");
    expect(result.version).toBe("0.1.0");
    expect(typeof result.timestamp).toBe("string");
  });

  it("echo returns the input message", async () => {
    const result = await caller.health.echo({ message: "hello" });
    expect(result.echo).toBe("hello");
  });
});
