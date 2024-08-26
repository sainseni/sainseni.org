import { useQuery } from '@tanstack/react-query';

import { getRoles } from '@/lib/actions';
import { RoleSearch } from '@/lib/schema';

export function useGetRoles(search: RoleSearch) {
    return useQuery({
        queryKey: ['roles', search],
        queryFn: () => getRoles(search),
    });
}
