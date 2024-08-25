import zod from 'zod';
import 'dotenv/config';

const envSchema = zod.object({
    NODE_ENV: zod.string().default('development'),
    // Frontend
    NEXT_PUBLIC_URL: zod.string().default('http://localhost:3000'),
    PORT: zod.string().default('3000'),
    // Database
    DATABASE_URL: zod.string().default(''),
    // SSO settings
    GITHUB_CLIENT_ID: zod.string().default(''),
    GITHUB_CLIENT_SECRET: zod.string().default(''),
    GOOGLE_CLIENT_ID: zod.string().default(''),
    GOOGLE_CLIENT_SECRET: zod.string().default(''),
});

const env = envSchema.parse(process.env);

export default env;
