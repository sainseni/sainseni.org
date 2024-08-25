import uuid from 'uuid';
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
                accountId: uuid.v4(),
                email: 'jokowi@indonesia.go.id',
                accountType: 'google',
                role: adminRole.id,
            },
            {
                accountId: uuid.v4(),
                email: 'prabowo@indonesia.go.id',
                accountType: 'github',
                role: userRole.id,
            },
        ])
        .onConflictDoNothing()
        .returning();

    await pg.end();
}

main();
