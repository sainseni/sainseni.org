import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { cache } from 'react';
import 'server-only';

import { lucia, validateRequest } from '@/lib/auth';
import { AuthenticationError } from '@/lib/error';

import { database, User } from '@/database';

export const getCurrentUser = cache(async () => {
    const { user } = await validateRequest();
    if (!user) {
        return undefined;
    }
    return user;
});

export const assertAuthenticated = async () => {
    const user = await getCurrentUser();
    if (!user) {
        throw new AuthenticationError();
    }
    return user;
};

export const checkAdmin = async () => {
    const user = await assertAuthenticated();

    const adminRole = await database.query.role.findFirst({
        where: (role) => eq(role.id, user?.roleId),
    });

    return {
        user,
        isAdmin: adminRole?.name == 'admin',
    };
};

export async function setSession(user: User) {
    const session = await lucia.createSession(user.id, {
        expireIn: 60 * 60 * 24 * 30,
    });
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
    );
}
