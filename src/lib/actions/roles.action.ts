'use server';

import { and, desc, eq, ilike } from 'drizzle-orm';

import { checkAdmin } from '@/lib/auth';
import { SearchRole } from '@/lib/schema';

import { database, role } from '@/database';

export async function getRoles(search: SearchRole) {
    const { isAdmin } = await checkAdmin();

    if (!isAdmin) {
        return [];
    }

    return await database
        .select()
        .from(role)
        .where(and(search.name ? ilike(role.name, search.name) : undefined))
        .orderBy(desc(role.createdAt));
}

export async function editRoleName(roleId: string, name: string) {
    const { isAdmin } = await checkAdmin();

    if (!isAdmin) {
        return;
    }

    return await database
        .update(role)
        .set({
            name,
        })
        .where(eq(role.id, roleId));
}

export async function deleteRole(roleId: string) {
    const { isAdmin } = await checkAdmin();

    if (!isAdmin) {
        return;
    }

    return await database.delete(role).where(eq(role.id, roleId));
}

export async function createRole(name: string) {
    const { isAdmin } = await checkAdmin();

    if (!isAdmin) {
        return;
    }

    return await database
        .insert(role)
        .values({
            name,
        })
        .returning();
}
