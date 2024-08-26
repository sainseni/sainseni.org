'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';

export const queryClient = new QueryClient();

function RootTemplate({ children }: React.PropsWithChildren) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
export default dynamic(() => Promise.resolve(RootTemplate), {
    ssr: false,
});
