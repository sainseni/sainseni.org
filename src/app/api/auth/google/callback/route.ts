import { OAuth2RequestError } from 'arctic';
import { cookies } from 'next/headers';

import { google } from '@/lib/auth';
import { createUserViaGoogle, getUserByGoogleId } from '@/lib/auth';
import { setSession } from '@/lib/auth/session';

import settings from '@/data/settings';

export async function GET(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const storedState = cookies().get('google_oauth_state')?.value ?? null;
    const codeVerifier = cookies().get('google_code_verifier')?.value ?? null;

    if (
        !code ||
        !state ||
        !storedState ||
        state !== storedState ||
        !codeVerifier
    ) {
        return new Response(null, {
            status: 400,
        });
    }

    try {
        const tokens = await google.validateAuthorizationCode(
            code,
            codeVerifier,
        );
        const response = await fetch(
            'https://openidconnect.googleapis.com/v1/userinfo',
            {
                headers: {
                    Authorization: `Bearer ${tokens.accessToken}`,
                },
            },
        );
        const googleUser: GoogleUser = await response.json();

        const existingAccount = await getUserByGoogleId(googleUser.sub);

        if (existingAccount) {
            await setSession(existingAccount.id);
            return new Response(null, {
                status: 302,
                headers: {
                    Location: settings.redirectLogin,
                },
            });
        }

        const userId = await createUserViaGoogle({
            accountId: googleUser.sub,
            email: googleUser.email,
            name: googleUser.name,
            avatar: googleUser.picture,
        });
        await setSession(userId);
        return new Response(null, {
            status: 302,
            headers: {
                Location: settings.redirectLogin,
            },
        });
    } catch (e) {
        // the specific error message depends on the provider
        if (e instanceof OAuth2RequestError) {
            // invalid code
            return new Response(null, {
                status: 400,
            });
        }
        return new Response(null, {
            status: 500,
        });
    }
}

export interface GoogleUser {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
}
