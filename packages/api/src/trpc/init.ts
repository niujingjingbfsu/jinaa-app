import { initTRPC } from "@trpc/server";
import { z } from "zod";

// Context type (extend with auth/db when available)
export interface Context {
  // userId?: string;
}

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export { z };
