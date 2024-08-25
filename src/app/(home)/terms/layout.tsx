import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Sainseni Community',
    authors: [
        {
            name: 'Khoironi Kurnia Syah',
            url: 'https://zekhoi.dev',
        },
    ],
    description: 'Community for community',
};

export default function TermsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
