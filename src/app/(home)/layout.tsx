import { ReactNode } from 'react';

import Footer from './footer';
import Navbar from './navbar';

type HomeLayoutProps = {
    children: ReactNode;
};
export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className='flex flex-col min-h-screen bg-white text-gray-800'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
