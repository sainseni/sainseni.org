import { useQuery } from '@tanstack/react-query';

import { getRoles } from '@/lib/actions';
import { SearchRole } from '@/lib/schema';

export function useGetRoles(search: SearchRole) {
    return useQuery({
        queryKey: ['roles', search],
        queryFn: () => getRoles(search),
    });
}
