import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

import { role } from '@/database/tables';

export const accountTypeEnum = pgEnum('type', ['google', 'github']);

export const user = pgTable('users', {
    id: uuid('id').primaryKey().$defaultFn(uuidv7),
    name: text('name').notNull(),
    avatar: text('avatar'),
    accountType: accountTypeEnum('account_type').notNull(),
    accountId: text('account_id').unique().notNull(),
    email: text('email').unique().notNull(),
    roleId: uuid('role_id')
        .notNull()
        .references(() => role.id),
    createdAt: timestamp('created_at', { withTimezone: true })
        .defaultNow()
        .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
        .defaultNow()
        .notNull(),
});

export type User = typeof user.$inferSelect;
export type ModifiedUser = Pick<User, 'name' | 'avatar' | 'email' | 'roleId'>;
