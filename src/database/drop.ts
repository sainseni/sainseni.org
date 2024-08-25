import 'dotenv/config';

import { database, pg } from './index';

async function main() {
    const tablesSchema = database._.schema;
    if (!tablesSchema) throw new Error('Schema not loaded');

    await pg.end();
}

main();
