import { z } from 'zod';

export const UserSearchSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    roleIds: z.array(z.string()).optional(),
});

export const EditUserRoleSchema = z.object({
    userId: z.string(),
    roleId: z.string(),
});

export type EditUserRole = z.infer<typeof EditUserRoleSchema>;

export type UserSearch = z.infer<typeof UserSearchSchema>;
