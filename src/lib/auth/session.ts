import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { cache } from 'react';
import 'server-only';

import { lucia, validateRequest } from '@/lib/auth';
import { AuthenticationError } from '@/lib/error';

import { database, role, User } from '@/database';

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

export const checkRole = async () => {
    const user = await assertAuthenticated();

    const [admin] = await database
        .select({
            name: role.name,
        })
        .from(role)
        .where(eq(role.id, user?.role));

    return admin?.name !== 'admin';
    // if (!isAdmin) {
    //     throw new AuthorizationError();
    // }
    // return isAdmin;
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
