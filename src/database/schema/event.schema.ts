import { pgTable, uuid } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

export const event = pgTable('events', {
    id: uuid('id').primaryKey().$defaultFn(uuidv7),
});

export type Event = typeof event.$inferSelect;
