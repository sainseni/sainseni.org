'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';

import { Toaster } from '@/components/ui/toaster';
export const queryClient = new QueryClient();

function RootTemplate({ children }: React.PropsWithChildren) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster />
        </QueryClientProvider>
    );
}
export default dynamic(() => Promise.resolve(RootTemplate), {
    ssr: false,
});
