'use server';

import { desc } from 'drizzle-orm';

import { checkAdmin } from '@/lib/auth';

import { database, reference } from '@/database';

export async function getReferences() {
    const { isAdmin } = await checkAdmin();

    if (!isAdmin) {
        return [];
    }

    return await database
        .select()
        .from(reference)
        // .where(
        //     and(search.name ? ilike(reference.name, search.name) : undefined),
        // )
        .orderBy(desc(reference.createdAt));
}
