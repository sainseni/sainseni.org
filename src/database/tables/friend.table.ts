import { pgTable, uuid } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

export const friend = pgTable('friends', {
    id: uuid('id').primaryKey().$defaultFn(uuidv7),
});

export type Friend = typeof friend.$inferSelect;
