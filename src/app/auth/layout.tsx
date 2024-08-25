import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { validateRequest } from '@/lib/auth';

import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';

export const metadata: Metadata = {
    title: 'Signin | Sainseni Community',
    authors: [
        {
            name: 'Khoironi Kurnia Syah',
            url: 'https://zekhoi.dev',
        },
    ],
    description: 'Community for community',
};

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await validateRequest();

    if (user.session) {
        return redirect('/dashboard');
    }

    return (
        <div className='flex flex-col min-h-screen bg-white text-gray-800'>
            <Navbar isSigned={!!user.session} />
            {children}
            <Footer />
        </div>
    );
}
