"use client";

import { type CreateTRPCReact, createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@jinaa/api/trpc/router";

export const trpc: CreateTRPCReact<AppRouter, unknown> = createTRPCReact<AppRouter>();
