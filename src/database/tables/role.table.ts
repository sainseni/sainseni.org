import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

export const role = pgTable('roles', {
    id: uuid('id').primaryKey().$defaultFn(uuidv7),
    name: text('name').unique().notNull(),
    createdAt: timestamp('created_at', { withTimezone: true })
        .defaultNow()
        .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
        .defaultNow()
        .notNull(),
});

export type Role = typeof role.$inferSelect;
