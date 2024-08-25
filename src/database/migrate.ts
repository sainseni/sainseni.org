import { migrate } from 'drizzle-orm/postgres-js/migrator';
import 'dotenv/config';

import { database, pg } from './index';

async function main() {
    await migrate(database, { migrationsFolder: 'drizzle' });
    await pg.end();
}

main();
