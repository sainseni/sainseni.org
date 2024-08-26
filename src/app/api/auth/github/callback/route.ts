import { OAuth2RequestError } from 'arctic';
import { cookies } from 'next/headers';

import {
    createUserViaGithub,
    getUserByGithubId,
    github,
    setSession,
} from '@/lib/auth';

import settings from '@/data/settings';

export interface GitHubUser {
    id: string;
    login: string;
    avatar_url: string;
    email: string;
    name: string;
}

interface Email {
    email: string;
    primary: boolean;
    verified: boolean;
    visibility: string | null;
}

export async function GET(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (!code || !state) {
        return Response.json(
            { error: 'Invalid request' },
            {
                status: 400,
            },
        );
    }

    const savedState = cookies().get('github_oauth_state')?.value;

    if (!savedState) {
        return Response.json(
            { error: 'saved state is not exists' },
            {
                status: 400,
            },
        );
    }

    if (savedState !== state) {
        return Response.json(
            {
                error: 'State does not match',
            },
            {
                status: 400,
            },
        );
    }

    try {
        const { accessToken } = await github.validateAuthorizationCode(code);
        const githubUserResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            method: 'GET',
        });
        const githubUser: GitHubUser = await githubUserResponse.json();

        const existingAccount = await getUserByGithubId(githubUser.id);
        if (existingAccount) {
            await setSession(existingAccount);
            return new Response(null, {
                status: 302,
                headers: {
                    Location: settings.redirectLogin,
                },
            });
        }

        if (!githubUser.email) {
            const githubUserEmailResponse = await fetch(
                'https://api.github.com/user/emails',
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );
            const githubUserEmails = await githubUserEmailResponse.json();

            githubUser.email = getPrimaryEmail(githubUserEmails);
        }

        const user = await createUserViaGithub({
            accountId: githubUser.id,
            email: githubUser.email,
            name: githubUser.name,
            avatar: githubUser.avatar_url,
        });

        await setSession(user);
        return new Response(null, {
            status: 302,
            headers: {
                Location: settings.redirectLogin,
            },
        });
    } catch (e) {
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

function getPrimaryEmail(emails: Email[]): string {
    const primaryEmail = emails.find((email) => email.primary);
    return primaryEmail!.email;
}
