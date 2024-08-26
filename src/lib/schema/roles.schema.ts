import { z } from 'zod';

export const SearchRoleSchema = z.object({
    name: z.string().optional(),
});

export const EditRoleNameSchema = z.object({
    roleId: z.string(),
    name: z.string(),
});

export type EditRoleName = z.infer<typeof EditRoleNameSchema>;
export type SearchRole = z.infer<typeof SearchRoleSchema>;
