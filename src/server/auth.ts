// import SqlAdapter from 'authjs-adapter-sql';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { type GetServerSidePropsContext } from 'next';
import {
    type DefaultSession,
    getServerSession,
    type NextAuthOptions,
} from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

// import { Kysely, PostgresDialect } from 'kysely';
// import { buildKyselyHelpers } from 'authjs-adapter-sql/kysely';
// import { Database } from '@/database';
// import { Pool } from 'pg';
import { prisma } from '@/server/database';

import { env } from '@/env.mjs';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
            // ...other properties
            // role: UserRole;
        } & DefaultSession['user'];
    }

    // interface User {
    //   // ...other properties
    //   // role: UserRole;
    // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */

// const pool = new Pool({
//     connectionString: env.DATABASE_URL,
// });

// const db = new Kysely<Database>({
//     dialect: new PostgresDialect({
//         pool,
//     }),
// });

// const helper = buildKyselyHelpers(db, 'postgres');

export const authOptions: NextAuthOptions = {
    callbacks: {
        session: ({ session, token }) => ({
            ...session,
            user: {
                ...session.user,
                id: token.sub,
            },
        }),
    },
    // adapter: SqlAdapter(helper),
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: env.GITHUB_CLIENT_ID,
            clientSecret: env.GITHUB_CLIENT_SECRET,
        }),
        // DiscordProvider({
        //     clientId: env.DISCORD_CLIENT_ID,
        //     clientSecret: env.DISCORD_CLIENT_SECRET,
        // }),
        /**
         * ...add more providers here.
         *
         * Most other providers require a bit more work than the Discord provider. For example, the
         * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
         * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
         *
         * @see https://next-auth.js.org/providers/github
         */
    ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext['req'];
    res: GetServerSidePropsContext['res'];
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};
