import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";
import { todos } from "~/server/db/schema";

export const todosRouter = createTRPCRouter({
	getAll: publicProcedure.query(async ({ ctx }) => {
		const data = await ctx.db.select().from(todos);

		return data;
	}),
});
