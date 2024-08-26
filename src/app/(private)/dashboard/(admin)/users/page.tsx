'use client';

import { AlertCircle, Loader2, Users } from 'lucide-react';

import { useEditUserRole } from '@/lib/mutations';
import { useGetRoles } from '@/lib/queries';
import { useGetUsers } from '@/lib/queries/users.query';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';

import RoleFormDialog from './role-form';

export default function UserManagement() {
    const { toast } = useToast();
    const editUserRoleMutation = useEditUserRole();

    const {
        data: userData,
        isLoading: isUserLoading,
        error: userError,
        refetch: refetchUsers,
    } = useGetUsers({});

    const {
        data: roleData,
        isLoading: isRoleLoading,
        error: roleError,
    } = useGetRoles({});

    const handleRoleChange = (userId: string, newRoleId: string) => {
        editUserRoleMutation.mutate(
            { userId, roleId: newRoleId },
            {
                onSuccess: () => {
                    refetchUsers();
                    toast({
                        title: 'Success',
                        description: 'User role has been updated.',
                    });
                },
                onError: () => {
                    toast({
                        title: 'Error',
                        description:
                            'Failed to update user role. Please try again.',
                        variant: 'destructive',
                    });
                },
            },
        );
    };

    const isLoading = isUserLoading || isRoleLoading;
    const error = userError || roleError;

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <Loader2 className='h-8 w-8 animate-spin' />
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant='destructive'>
                <AlertCircle className='h-4 w-4' />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Failed to load data. Please try again later.
                </AlertDescription>
            </Alert>
        );
    }

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
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {userData &&
                                        userData.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell className='font-medium'>
                                                    {user.name}
                                                </TableCell>
                                                <TableCell className='hidden sm:table-cell'>
                                                    {user.email}
                                                </TableCell>
                                                <TableCell>
                                                    <Select
                                                        defaultValue={
                                                            user.roleId
                                                        }
                                                        onValueChange={(
                                                            value,
                                                        ) =>
                                                            handleRoleChange(
                                                                user.id,
                                                                value,
                                                            )
                                                        }
                                                    >
                                                        <SelectTrigger className='w-[180px]'>
                                                            <SelectValue placeholder='Select a role' />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {roleData &&
                                                                roleData.map(
                                                                    (role) => (
                                                                        <SelectItem
                                                                            key={
                                                                                role.id
                                                                            }
                                                                            value={
                                                                                role.id
                                                                            }
                                                                        >
                                                                            {
                                                                                role.name
                                                                            }
                                                                        </SelectItem>
                                                                    ),
                                                                )}
                                                        </SelectContent>
                                                    </Select>
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
