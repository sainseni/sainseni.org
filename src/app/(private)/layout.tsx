import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { validateRequest } from '@/lib/auth';

import PrivateHeader from '@/components/private/header';

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
    const { session, user } = await validateRequest();

    if (!session || !user) {
        return redirect('/auth');
    }

    return (
        <div className='flex flex-col min-h-screen bg-white text-gray-800'>
            <PrivateHeader />
            {children}
        </div>
    );
}
