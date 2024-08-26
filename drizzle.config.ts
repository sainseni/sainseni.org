import { defineConfig } from 'drizzle-kit';

import env from '@/env';

export default defineConfig({
    schema: './src/database/tables/index.ts',
    dialect: 'postgresql',
    out: './drizzle',
    dbCredentials: {
        url: env.DATABASE_URL,
    },
    verbose: true,
    strict: true,
});
