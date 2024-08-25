'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import settings from '@/data/settings';

const navbarMenu = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
    { name: 'Projects', url: '/projects' },
    { name: 'Friends', url: '/friends' },
    { name: 'References', url: '/references' },
    { name: 'About', url: '/about' },
    { name: 'Blog', url: '/blog' },
];

type NavbarProps = {
    isSigned: boolean;
};
export default function Navbar({ isSigned = false }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    return (
        <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 items-center justify-between'>
                <Link href='/' className='flex items-center space-x-2'>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-xl font-bold'
                    >
                        {settings.sitename}
                    </motion.span>
                </Link>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='md:hidden'
                        >
                            <Menu className='h-6 w-6' />
                            <span className='sr-only'>Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side='right'
                        className='w-[300px] sm:w-[400px]'
                    >
                        <nav className='flex flex-col space-y-4 mt-4'>
                            <AnimatePresence>
                                {navbarMenu.map((item, index) => (
                                    <motion.div
                                        key={item.url}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 50 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <Link
                                            href={item.url}
                                            className={`transition-colors hover:text-foreground ${
                                                isActive(item.url)
                                                    ? 'text-foreground font-semibold'
                                                    : 'text-muted-foreground'
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </nav>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='flex flex-col space-y-4 mt-8'
                        >
                            {isSigned ? (
                                <>
                                    <Button
                                        className='w-full'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Sign Out
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href='/auth'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Button className='w-full'>
                                            Sign In
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </motion.div>
                    </SheetContent>
                </Sheet>

                <nav className='hidden md:flex items-center space-x-6 text-sm font-medium'>
                    {navbarMenu.map((item, index) => (
                        <motion.div
                            key={item.url}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={item.url}
                                className={`transition-colors hover:text-foreground/80 ${
                                    isActive(item.url)
                                        ? 'text-foreground font-semibold'
                                        : 'text-foreground/60'
                                }`}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='hidden md:flex items-center space-x-2'
                >
                    {isSigned ? (
                        <>
                            <Button size='sm'>Sign Out</Button>
                        </>
                    ) : (
                        <>
                            <Link href='/auth'>
                                <Button size='sm'>Sign In</Button>
                            </Link>
                        </>
                    )}
                </motion.div>
            </div>
        </header>
    );
}
