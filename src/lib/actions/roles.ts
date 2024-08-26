'use server';

import { and, desc, ilike } from 'drizzle-orm';

import { RoleSearch } from '@/lib/schema';

import { database, role } from '@/database';

export async function getRoles(search: RoleSearch) {
    return await database
        .select()
        .from(role)
        .where(and(search.name ? ilike(role.name, search.name) : undefined))
        .orderBy(desc(role.createdAt));
}
