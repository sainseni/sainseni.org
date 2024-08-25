import 'dotenv/config';

import * as table from '@/database/schema';
import env from '@/env';

import { database, pg } from './index';

async function main() {
    try {
        if (env.NODE_ENV !== 'development') {
            throw new Error('Seed is only allowed in development environment');
        }

        const [admin, user] = await database
            .insert(table.role)
            .values([
                {
                    name: 'admin',
                },
                {
                    name: 'user',
                },
            ])
            .onConflictDoNothing()
            .returning();

        await database
            .insert(table.user)
            .values([
                {
                    username: 'jokowi',
                    email: 'jokowi@indonesia.go.id',
                    accountType: 'google',
                    role: admin.id,
                },
                {
                    username: 'prabowo',
                    email: 'prabowo@indonesia.go.id',
                    accountType: 'github',
                    role: user.id,
                },
            ])
            .onConflictDoNothing()
            .returning();

        console.log('Seed completed');
    } catch (error) {
        console.error(
            (error as Error)?.message ||
                'An error occurred while seeding the database.',
        );
    } finally {
        await pg.end();
    }
}

main();
