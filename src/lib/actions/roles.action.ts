'use server';

import { and, desc, eq, ilike } from 'drizzle-orm';

import { SearchRole } from '@/lib/schema';

import { database, role } from '@/database';

export async function getRoles(search: SearchRole) {
    return await database
        .select()
        .from(role)
        .where(and(search.name ? ilike(role.name, search.name) : undefined))
        .orderBy(desc(role.createdAt));
}

export async function editRoleName(roleId: string, name: string) {
    return await database
        .update(role)
        .set({
            name,
        })
        .where(eq(role.id, roleId));
}

export async function deleteRole(roleId: string) {
    return await database.delete(role).where(eq(role.id, roleId));
}

export async function createRole(name: string) {
    return await database
        .insert(role)
        .values({
            name,
        })
        .returning();
}
