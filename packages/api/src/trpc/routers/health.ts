import { publicProcedure, router, z } from "../init";

export const healthRouter = router({
  ping: publicProcedure.query(() => ({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: "0.1.0",
  })),
  echo: publicProcedure
    .input(z.object({ message: z.string() }))
    .query(({ input }) => ({ echo: input.message })),
});
