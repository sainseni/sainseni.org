import { validateRequest } from '@/lib/auth';

import Footer from '@/components/public/footer';
import Header from '@/components/public/header';

type HomeLayoutProps = {
    children: React.ReactNode;
};
export default async function HomeLayout({ children }: HomeLayoutProps) {
    const user = await validateRequest();

    return (
        <div className='flex flex-col min-h-screen bg-white text-gray-800'>
            <Header isSigned={!!user.session} />
            {children}
            <Footer />
        </div>
    );
}
