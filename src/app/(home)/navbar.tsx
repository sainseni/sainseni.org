'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import settings from '@/data/settings';

const navbarMenu = [
    {
        name: 'Home',
        url: '/',
    },
    // Uncomment these to add more menu items
    // {
    //     name: 'Tools',
    //     url: '/tools',
    // },
    // {
    //     name: 'Projects',
    //     url: '/projects',
    // },
    // {
    //     name: 'About',
    //     url: '/about',
    // },
    // {
    //     name: 'Blog',
    //     url: '/blog',
    // },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                                    className='text-muted-foreground transition-colors hover:text-foreground'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <div className='flex flex-col space-y-4 mt-8'>
                            <Link
                                href='/signin'
                                onClick={() => setIsOpen(false)}
                            >
                                <Button variant='outline' className='w-full'>
                                    Sign In
                                </Button>
                            </Link>
                            <Link
                                href='/signup'
                                onClick={() => setIsOpen(false)}
                            >
                                <Button className='w-full'>Sign Up</Button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>

                <nav className='hidden md:flex items-center space-x-6 text-sm font-medium'>
                    {navbarMenu.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            className='transition-colors hover:text-foreground/80 text-foreground/60'
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className='hidden md:flex items-center space-x-2'>
                    <Link href='/signin'>
                        <Button variant='ghost' size='sm'>
                            Sign In
                        </Button>
                    </Link>
                    <Link href='/signup'>
                        <Button size='sm'>Sign Up</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
