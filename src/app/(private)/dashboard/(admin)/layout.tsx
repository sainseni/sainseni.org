import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { checkAdmin } from '@/lib/auth';

export const metadata: Metadata = {
    title: 'Dashboard | Sainseni Community',
    authors: [
        {
            name: 'Khoironi Kurnia Syah',
            url: 'https://zekhoi.dev',
        },
    ],
    description: 'Community for community',
};

export default async function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { isAdmin } = await checkAdmin();

    if (!isAdmin) {
        return redirect('/dashboard');
    }

    return <>{children}</>;
}
