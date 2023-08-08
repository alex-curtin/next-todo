import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";
import { todos } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const todosRouter = createTRPCRouter({
	getAllCurrentUser: privateProcedure.query(async ({ ctx }) => {
		const data = await ctx.db
			.select()
			.from(todos)
			.where(eq(todos.userId, ctx.userId));

		return data;
	}),

	create: privateProcedure
		.input(
			z.object({
				title: z.string(),
				description: z.string(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const newTodo = await ctx.db
				.insert(todos)
				.values({
					title: input.title,
					description: input.description,
					userId: ctx.userId,
				})
				.returning();

			return newTodo;
		}),
});
