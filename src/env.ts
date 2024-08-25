import zod from 'zod';
import 'dotenv/config';

const envSchema = zod.object({
    NODE_ENV: zod.string().default('development'),
    PORT: zod.string().default('3000'),
    DATABASE_URL: zod.string(),
    GITHUB_CLIENT_ID: zod.string(),
    GITHUB_CLIENT_SECRET: zod.string(),
});

const env = envSchema.parse(process.env);

export default env;
