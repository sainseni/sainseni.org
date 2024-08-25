import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import LoadingPage from '@/components/common/loading-page';

const FriendsContent = dynamic(() => import('./content'), {
    ssr: false,
    loading: () => <LoadingPage />,
});

export default function FriendsPage() {
    return (
        <Suspense fallback={<LoadingPage />}>
            <FriendsContent />
        </Suspense>
    );
}
