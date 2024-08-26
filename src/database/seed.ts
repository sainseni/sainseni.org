import 'dotenv/config';

import * as table from '@/database/schema';
import env from '@/env';

import { database, pg } from './index';

async function main() {
    if (env.NODE_ENV !== 'development') {
        throw new Error('Seed is only allowed in development environment');
    }

    const [adminRole, userRole] = await database
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
                accountId: 'google:1234567890',
                email: 'jokowi@indonesia.go.id',
                name: 'Joko Widodo',
                accountType: 'google',
                roleId: adminRole.id,
            },
            {
                accountId: 'github:1234567890',
                email: 'prabowo@indonesia.go.id',
                name: 'Prabowo Subianto',
                accountType: 'github',
                roleId: userRole.id,
            },
        ])
        .onConflictDoNothing()
        .returning();

    await pg.end();
}

main();
