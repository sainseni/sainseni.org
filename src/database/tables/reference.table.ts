import { pgEnum, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

import { user } from '@/database/tables/user.table';

export const statusEnum = pgEnum('status', ['approved', 'pending', 'rejected']);

export const reference = pgTable('references', {
    id: uuid('id').primaryKey().$defaultFn(uuidv7),
    url: varchar('url', { length: 255 }).notNull().unique(),
    title: varchar('title', { length: 100 }),
    status: statusEnum('status').notNull(),
    description: varchar('description', { length: 255 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    createdBy: uuid('created_by')
        .notNull()
        .references(() => user.id),
});

export type Reference = typeof reference.$inferSelect;
