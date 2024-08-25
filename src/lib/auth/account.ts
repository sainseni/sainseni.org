import { eq } from 'drizzle-orm';

import { database, role, user } from '@/database';

export type CreateUserProps = {
    accountId: string;
    email: string;
};
export async function createUser(
    data: CreateUserProps,
    type: 'google' | 'github',
) {
    const userRole = await database.query.role.findFirst({
        where: eq(role.name, 'user'),
    });

    if (!userRole) {
        throw new Error('User role not found');
    }

    const [userCreated] = await database
        .insert(user)
        .values({
            accountType: type,
            accountId: data.accountId,
            email: data.email,
            role: userRole.id,
        })
        .onConflictDoNothing()
        .returning();

    return userCreated;
}
export async function getUserByUserId(userId: string) {
    const account = await database.query.user.findFirst({
        where: eq(user.id, userId),
    });

    return account;
}

export async function createUserViaGithub(
    data: CreateUserProps,
): Promise<string> {
    const userCreated = await createUser(data, 'github');
    return userCreated.id;
}

export async function createUserViaGoogle(
    data: CreateUserProps,
): Promise<string> {
    const userCreated = await createUser(data, 'google');
    return userCreated.id;
}

export async function getUserByGoogleId(googleId: string) {
    return await database.query.user.findFirst({
        where: eq(user.accountId, googleId),
    });
}

export async function getUserByGithubId(githubId: string) {
    return await database.query.user.findFirst({
        where: eq(user.accountId, githubId),
    });
}
