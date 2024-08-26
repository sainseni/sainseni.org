import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { validateRequest } from '@/lib/auth';

import Footer from '@/components/public/footer';
import Header from '@/components/public/header';

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

export default async function SigninLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { session } = await validateRequest();

    if (session) {
        return redirect('/dashboard');
    }

    return (
        <div className='flex flex-col min-h-screen bg-white text-gray-800'>
            <Header isSigned={!!session} />
            {children}
            <Footer />
        </div>
    );
}
