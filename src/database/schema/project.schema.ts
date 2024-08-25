import { pgTable, uuid } from 'drizzle-orm/pg-core';
import { v7 as uuidv7 } from 'uuid';

export const project = pgTable('projects', {
    id: uuid('id').primaryKey().$defaultFn(uuidv7),
});

export type Project = typeof project.$inferSelect;
