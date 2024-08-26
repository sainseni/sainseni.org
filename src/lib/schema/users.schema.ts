import { z } from 'zod';

export const UserSearchSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    roleIds: z.array(z.string()).optional(),
});

export type UserSearch = z.infer<typeof UserSearchSchema>;
