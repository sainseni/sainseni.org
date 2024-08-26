'use client';

import { Menu, Users } from 'lucide-react';

import { useGetUsers } from '@/lib/queries/users.query';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import RoleFormDialog from './role-form';
export default function Component() {
    const {
        data: userData,
        // isLoading: isuserLoading,
        // error: userError,
    } = useGetUsers({});
    return (
        <div className='container mx-auto p-4 space-y-8'>
            <header className='flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0'>
                <h1 className='text-2xl font-bold flex items-center gap-2'>
                    <Users className='h-6 w-6' />
                    User Management
                </h1>
                <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto'>
                    <RoleFormDialog />
                </div>
            </header>

            <main>
                <Card>
                    <CardHeader>
                        <CardTitle>User List</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className='h-[300px] sm:h-[400px]'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='w-[200px]'>
                                            Name
                                        </TableHead>
                                        <TableHead className='hidden sm:table-cell'>
                                            Email
                                        </TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead className='text-right'>
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {userData &&
                                        userData.map((member) => (
                                            <TableRow key={member.id}>
                                                <TableCell className='font-medium'>
                                                    {member.name}
                                                </TableCell>
                                                <TableCell className='hidden sm:table-cell'>
                                                    {member.email}
                                                </TableCell>
                                                <TableCell>
                                                    {member.roleName}
                                                </TableCell>
                                                <TableCell className='text-right'>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger
                                                            asChild
                                                        >
                                                            <Button
                                                                variant='ghost'
                                                                className='h-8 w-8 p-0'
                                                            >
                                                                <span className='sr-only'>
                                                                    Open menu
                                                                </span>
                                                                <Menu className='h-4 w-4' />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align='end'>
                                                            <DropdownMenuLabel>
                                                                Actions
                                                            </DropdownMenuLabel>
                                                            <DropdownMenuItem>
                                                                Edit User
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                Change Role
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem>
                                                                Delete User
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
