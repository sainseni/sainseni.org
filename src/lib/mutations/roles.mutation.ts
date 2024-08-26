import { useMutation } from '@tanstack/react-query';

import { createRole, deleteRole, editRoleName } from '@/lib/actions';
import { EditRoleName } from '@/lib/schema';

export function useEditRoleName() {
    return useMutation({
        mutationFn: (payload: EditRoleName) =>
            editRoleName(payload.roleId, payload.name),
    });
}

export function useDeleteRole() {
    return useMutation({
        mutationFn: (roleId: string) => deleteRole(roleId),
    });
}

export function useCreateRole() {
    return useMutation({
        mutationFn: (name: string) => createRole(name),
    });
}
