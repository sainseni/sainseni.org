import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

import { role } from '@/database/schema/role.schema';

export const accountTypeEnum = pgEnum('type', ['google', 'github']);

export const user = pgTable('users', {
    id: uuid('id').primaryKey().$defaultFn(uuidv7),
    name: text('name').notNull(),
    avatar: text('avatar'),
    accountType: accountTypeEnum('account_type').notNull(),
    accountId: text('account_id').unique().notNull(),
    email: text('email').unique().notNull(),
    role: uuid('role')
        .notNull()
        .references(() => role.id),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type User = typeof user.$inferSelect;
