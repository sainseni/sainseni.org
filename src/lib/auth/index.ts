import { GitHub, Google } from 'arctic';
import type { Session, User } from 'lucia';
import { Lucia } from 'lucia';
import { cookies } from 'next/headers';
import { cache } from 'react';

import { adapter } from '@/database';
import type { User as DatabaseUser } from '@/database/schema';
import env from '@/env';

export * from './account';
export * from './session';

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: env.NODE_ENV === 'production',
        },
    },
    getUserAttributes: (attribute) => {
        return {
            id: attribute.id,
            role: attribute.roleId,
            name: attribute.name,
        };
    },
});

declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUser;
    }
}

export const validateRequest = cache(
    async (): Promise<
        { user: User; session: Session } | { user: null; session: null }
    > => {
        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
        if (!sessionId) {
            return {
                user: null,
                session: null,
            };
        }

        const result = await lucia.validateSession(sessionId);
        // next.js throws when you attempt to set cookie when rendering page
        try {
            if (result.session && result.session.fresh) {
                const sessionCookie = lucia.createSessionCookie(
                    result.session.id,
                );
                cookies().set(
                    sessionCookie.name,
                    sessionCookie.value,
                    sessionCookie.attributes,
                );
            }
            if (!result.session) {
                const sessionCookie = lucia.createBlankSessionCookie();
                cookies().set(
                    sessionCookie.name,
                    sessionCookie.value,
                    sessionCookie.attributes,
                );
            }
        } catch {
            // ignore
        }
        return result;
    },
);

export const github = new GitHub(
    env.GITHUB_CLIENT_ID,
    env.GITHUB_CLIENT_SECRET,
    {
        redirectURI: `${env.NEXT_PUBLIC_URL}/api/auth/github/callback`,
    },
);

export const google = new Google(
    env.GOOGLE_CLIENT_ID,
    env.GOOGLE_CLIENT_SECRET,
    `${env.NEXT_PUBLIC_URL}/api/auth/google/callback`,
);
