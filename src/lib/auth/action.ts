import { cookies } from 'next/headers';

import { lucia, validateRequest } from '@/lib/auth';

export const signOut = async () => {
    try {
        const { session } = await validateRequest();

        if (!session) {
            return {
                error: 'Unauthorized',
            };
        }

        await lucia.invalidateSession(session.id);

        const sessionCookie = lucia.createBlankSessionCookie();

        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes,
        );
    } catch (error) {
        if (error instanceof Error) {
            return {
                error: error.message,
            };
        }
        return {
            error: `An error occurred: ${error}`,
        };
    }
};
