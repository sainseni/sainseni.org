import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

import { user } from './user.schema';

export const session = pgTable('session', {
    id: uuid('id').primaryKey(),
    userId: uuid('user_id')
        .notNull()
        .references(() => user.id),
    expiresAt: timestamp('expires_at', {
        withTimezone: true,
        mode: 'date',
    }).notNull(),
});

export type Session = typeof session.$inferSelect;
