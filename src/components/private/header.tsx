'use client';

import { CircleUser, Menu, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navbarMenu = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Projects', url: '/dashboard/projects' },
    { name: 'Friends', url: '/dashboard/friends' },
    { name: 'References', url: '/dashboard/references' },
    { name: 'Events', url: '/dashboard/events' },
    { name: 'Users', url: '/dashboard/users' },
    { name: 'Roles', url: '/dashboard/roles' },
    { name: 'Keys', url: '/dashboard/keys' },
];

export default function PrivateHeader() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/dashboard') {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    return (
        <header className='sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6'>
            <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
                <Link
                    href='/dashboard'
                    className='flex items-center gap-2 text-lg font-semibold md:text-base'
                >
                    <Sparkles className='h-6 w-6' />
                    <span className='sr-only'>Sainseni</span>
                </Link>
                {navbarMenu.map((item) => (
                    <Link
                        key={item.url}
                        href={item.url}
                        className={`transition-colors hover:text-foreground ${
                            isActive(item.url)
                                ? 'text-foreground font-semibold'
                                : 'text-muted-foreground'
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant='outline'
                        size='icon'
                        className='shrink-0 md:hidden'
                    >
                        <Menu className='h-5 w-5' />
                        <span className='sr-only'>Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side='left'>
                    <nav className='grid gap-6 text-lg font-medium'>
                        <Link
                            href='/dashboard'
                            className='flex items-center gap-2 text-lg font-semibold'
                        >
                            <Sparkles className='h-6 w-6' />
                            <span className='sr-only'>Sainseni</span>
                        </Link>
                        {navbarMenu.map((item) => (
                            <Link
                                key={item.url}
                                href={item.url}
                                className={`transition-colors hover:text-foreground ${
                                    isActive(item.url)
                                        ? 'text-foreground font-semibold'
                                        : 'text-muted-foreground'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='secondary'
                        size='icon'
                        className='rounded-full'
                    >
                        <CircleUser className='h-5 w-5' />
                        <span className='sr-only'>User menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>My Name</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
