import { useMutation } from '@tanstack/react-query';

import { editUserRole } from '@/lib/actions';
import { EditUserRole } from '@/lib/schema';

export function useEditUserRole() {
    return useMutation({
        mutationFn: (payload: EditUserRole) =>
            editUserRole(payload.userId, payload.roleId),
    });
}
