import {
    index,
    pgEnum,
    pgTable,
    text,
    timestamp,
    uuid,
    varchar,
} from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

import { role } from '@/database/schema/role.schema';

export const accountTypeEnum = pgEnum('type', ['google', 'github']);

export const user = pgTable(
    'users',
    {
        id: uuid('id').primaryKey().$defaultFn(uuidv7),
        username: varchar('username', { length: 60 }).unique().notNull(),
        accountType: accountTypeEnum('account_type').notNull(),
        email: text('email').unique().notNull(),
        role: uuid('role')
            .notNull()
            .references(() => role.id),
        createdAt: timestamp('created_at').defaultNow().notNull(),
        lastLogin: timestamp('last_login').defaultNow().notNull(),
    },
    (table) => {
        return {
            usernameIndex: index('username_index').on(table.username),
        };
    },
);

export type Users = typeof user.$inferSelect;
