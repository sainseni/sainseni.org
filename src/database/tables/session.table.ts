import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { user } from './user.table';

export const session = pgTable('sessions', {
    id: text('id').primaryKey(),
    userId: uuid('user_id')
        .notNull()
        .references(() => user.id),
    expiresAt: timestamp('expires_at', {
        withTimezone: true,
        mode: 'date',
    }).notNull(),
});

export type Session = typeof session.$inferSelect;
