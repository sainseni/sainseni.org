import { pgTable, unique, uuid } from 'drizzle-orm/pg-core';

import { reference } from './reference.table';
import { tag } from './tag.table';

export const referenceTag = pgTable(
    'reference_tags',
    {
        referenceId: uuid('reference_id')
            .references(() => reference.id)
            .notNull(),
        tagId: uuid('tag_id')
            .references(() => tag.id)
            .notNull(),
    },
    (table) => ({
        referenceTagUnique: unique('reference_tag_unique').on(
            table.referenceId,
            table.tagId,
        ),
    }),
);

export type ReferenceTag = typeof referenceTag.$inferSelect;
