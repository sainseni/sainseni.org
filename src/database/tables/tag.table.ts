import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

import { user } from './user.table';

export const tag = pgTable('tags', {
    id: uuid('id').primaryKey().$defaultFn(uuidv7),
    name: varchar('name', { length: 50 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    createdBy: uuid('created_by')
        .notNull()
        .references(() => user.id),
});

export type Tag = typeof tag.$inferSelect;
