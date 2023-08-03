import { InferModel, relations } from "drizzle-orm";
import {
	boolean,
	integer,
	pgTable,
	serial,
	timestamp,
	uniqueIndex,
	varchar,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	description: varchar("description", { length: 512 }),
	completed: boolean("completed").default(false),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
	userId: varchar("user_id").notNull(),
});
