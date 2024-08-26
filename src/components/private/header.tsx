'use client';

import { CircleUser, Menu, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { signOut } from '@/lib/actions/auth.action';
import { DatabaseUserAttributes } from '@/lib/auth';

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

type PrivateHeaderProps = {
    isAdmin: boolean;
    userData: DatabaseUserAttributes;
};
export default function PrivateHeader({
    isAdmin = false,
    userData,
}: PrivateHeaderProps) {
    const navbarMenu = [
        { name: 'Dashboard', url: '/dashboard', isAdmin: false },
        { name: 'Projects', url: '/dashboard/projects', isAdmin: false },
        { name: 'Friends', url: '/dashboard/friends', isAdmin: false },
        { name: 'References', url: '/dashboard/references', isAdmin: false },
        { name: 'Events', url: '/dashboard/events', isAdmin: false },
        { name: 'Users', url: '/dashboard/users', isAdmin: true },
        { name: 'Keys', url: '/dashboard/keys', isAdmin: true },
    ];

    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/dashboard') {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    return (
        <header className='sticky top-0 flex h-16 items-center justify-between border-b bg-background px-4 md:px-8'>
            <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
                <Link
                    href='/'
                    className='flex items-center gap-2 text-lg font-semibold md:text-base'
                >
                    <Sparkles className='h-6 w-6' />
                    <span className='sr-only'>Sainseni</span>
                </Link>
                {navbarMenu
                    .filter(
                        (item) =>
                            !isAdmin || // Show all menu if user is admin
                            !item.isAdmin, // Show only non-admin menu
                    )
                    .map((item) => (
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
                    <DropdownMenuLabel>{userData.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className='cursor-pointer text-red-500'
                        onClick={async () => await signOut()}
                    >
                        Sign Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
