'use server';

import { and, desc, eq, ilike, inArray, ne } from 'drizzle-orm';

import { checkAdmin } from '@/lib/auth';
import { UserSearch } from '@/lib/schema';

import { database, role, user } from '@/database';

export async function getUsers(search: UserSearch) {
    const { user: currentUser, isAdmin } = await checkAdmin();

    if (!isAdmin) {
        return [];
    }

    return await database
        .select({
            id: user.id,
            name: user.name,
            email: user.email,
            roleId: user.roleId,
            roleName: role.name,
        })
        .from(user)
        .leftJoin(role, eq(user.roleId, role.id))
        .where(
            and(
                search.name ? ilike(user.name, search.name) : undefined,
                search.email ? eq(user.email, search.email) : undefined,
                search.roleIds
                    ? inArray(user.roleId, search.roleIds)
                    : undefined,
                ne(user.id, currentUser?.id),
            ),
        )
        .orderBy(desc(user.updatedAt), desc(user.createdAt));
}

export async function editUserRole(userId: string, roleId: string) {
    const { isAdmin } = await checkAdmin();

    if (!isAdmin) {
        return;
    }

    return await database
        .update(user)
        .set({
            roleId,
        })
        .where(eq(user.id, userId));
}
