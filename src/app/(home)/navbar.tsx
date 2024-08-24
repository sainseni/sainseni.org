'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import settings from '@/data/settings';

const navbarMenu = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Tools',
        url: '/tools',
    },
    {
        name: 'Projects',
        url: '/projects',
    },
    {
        name: 'About',
        url: '/about',
    },
    {
        name: 'Blog',
        url: '/blog',
    },
];

export default function Navbar() {
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
                    <span className='text-xl font-bold'>
                        {settings.sitename}
                    </span>
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
                            {navbarMenu.map((item) => (
                                <Link
                                    key={item.url}
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
                            ))}
                        </nav>
                        <div className='flex flex-col space-y-4 mt-8'>
                            <Link href='/auth' onClick={() => setIsOpen(false)}>
                                <Button className='w-full'>Sign In</Button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>

                <nav className='hidden md:flex items-center space-x-6 text-sm font-medium'>
                    {navbarMenu.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            className={`transition-colors hover:text-foreground/80 ${
                                isActive(item.url)
                                    ? 'text-foreground font-semibold'
                                    : 'text-foreground/60'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className='hidden md:flex items-center space-x-2'>
                    <Link href='/auth'>
                        <Button size='sm'>Sign In</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
