import { migrate } from 'drizzle-orm/postgres-js/migrator';
import 'dotenv/config';

import { database, pg } from './index';

async function main() {
    try {
        await migrate(database, { migrationsFolder: 'drizzle' });

        console.log('Migration completed');
    } catch (error) {
        console.error(
            (error as Error)?.message ||
                'An error occurred while migrating the database.',
        );
    } finally {
        await pg.end();
    }
}

main();
