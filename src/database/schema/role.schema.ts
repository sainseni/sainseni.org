import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

export const role = pgTable('roles', {
    id: uuid('id').primaryKey().$defaultFn(uuidv7),
    name: text('name').unique().notNull(),
});

export type Role = typeof role.$inferSelect;
