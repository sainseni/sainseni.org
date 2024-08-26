'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { lucia, validateRequest } from '@/lib/auth';

export const signOut = async () => {
    const { session } = await validateRequest();

    if (!session) {
        redirect('/auth/signin');
    }

    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
    );
    redirect('/');
};
