import { validateRequest } from '@/lib/auth';

import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';

type HomeLayoutProps = {
    children: React.ReactNode;
};
export default async function HomeLayout({ children }: HomeLayoutProps) {
    const user = await validateRequest();

    return (
        <div className='flex flex-col min-h-screen bg-white text-gray-800'>
            <Navbar isSigned={!!user.session} />
            {children}
            <Footer />
        </div>
    );
}
