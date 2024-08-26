'use server';

import { and, desc, eq, ilike, inArray } from 'drizzle-orm';

import { UserSearch } from '@/lib/schema';

import { database, role, user } from '@/database';

export async function getUsers(search: UserSearch) {
    return await database
        .select({
            id: user.id,
            name: user.name,
            email: user.email,
            roleName: role.name,
        })
        .from(user)
        .fullJoin(role, eq(user.roleId, role.id))
        .where(
            and(
                search.name ? ilike(user.name, search.name) : undefined,
                search.email ? eq(user.email, search.email) : undefined,
                search.roleIds
                    ? inArray(user.roleId, search.roleIds)
                    : undefined,
            ),
        )
        .orderBy(desc(user.createdAt));
}
