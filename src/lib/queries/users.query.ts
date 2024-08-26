import { useQuery } from '@tanstack/react-query';

import { getUsers } from '@/lib/actions';
import { UserSearch } from '@/lib/schema';

export function useGetUsers(search: UserSearch) {
    return useQuery({
        queryKey: ['users', search],
        queryFn: () => getUsers(search),
    });
}
