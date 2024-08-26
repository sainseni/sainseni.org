import { z } from 'zod';

export const RoleSearchSchema = z.object({
    name: z.string().optional(),
});

export type RoleSearch = z.infer<typeof RoleSearchSchema>;
