import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const FriendsContent = dynamic(() => import('./content'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

export default function FriendsPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <FriendsContent />
        </Suspense>
    );
}
