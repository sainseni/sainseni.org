import Link from 'next/link';

export default function footer() {
    return (
        <footer className='py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <p className='text-sm mb-4 md:mb-0'>
                    &copy; {new Date().getFullYear()}{' '}
                    <span className='font-bold'>Sainseni</span>. All rights
                    reserved.
                </p>
                <div className='flex space-x-4'>
                    <Link href='/contact' className='text-sm hover:underline'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
}
