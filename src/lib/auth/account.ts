import { eq } from 'drizzle-orm';

import { database, role, User, user } from '@/database';

export type CreateUserProps = {
    accountId: string;
    email: string;
    name: string;
    avatar?: string;
};
export async function createUser(
    data: CreateUserProps,
    type: 'google' | 'github',
) {
    const memberRole = await database.query.role.findFirst({
        where: eq(role.name, 'member'),
    });

    if (!memberRole) {
        throw new Error('Member role not found');
    }

    const [userCreated] = await database
        .insert(user)
        .values({
            accountType: type,
            accountId: data.accountId,
            email: data.email,
            roleId: memberRole.id,
            name: data.name,
            avatar: data.avatar,
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
): Promise<User> {
    return await createUser(data, 'github');
}

export async function createUserViaGoogle(
    data: CreateUserProps,
): Promise<User> {
    return await createUser(data, 'google');
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
