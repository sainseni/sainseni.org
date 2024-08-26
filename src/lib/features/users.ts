'use server';

import { eq } from 'drizzle-orm';

import { database, ModifiedUser, user as userTable } from '@/database';

export async function editUser(userId: string, data: Partial<ModifiedUser>) {
    const [selectedUser] = await database
        .select({ id: userTable.id })
        .from(userTable)
        .where(eq(userTable.id, userId));

    if (!selectedUser) {
        throw new Error('User not found');
    }

    await database
        .update(userTable)
        .set({ ...data })
        .where(eq(userTable.id, selectedUser.id))
        .execute();
}
