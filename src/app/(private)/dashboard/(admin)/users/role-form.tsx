'use client';

import {
    AlertCircle,
    Loader2,
    Pencil,
    Plus,
    Settings,
    Trash2,
} from 'lucide-react';
import { useState } from 'react';

import { useCreateRole, useDeleteRole, useEditRoleName } from '@/lib/mutations';
import { useGetRoles } from '@/lib/queries';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function RoleFormDialog() {
    const editMutation = useEditRoleName();
    const createMutation = useCreateRole();
    const deleteMutation = useDeleteRole();
    const [newRoleName, setNewRoleName] = useState('');
    const {
        data: roleData,
        isLoading: isRoleLoading,
        error: roleError,
        refetch: refetchRoles,
    } = useGetRoles({});

    const handleAddRole = () => {
        createMutation.mutate(newRoleName);
        setNewRoleName('');
        refetchRoles();
    };

    const handleEditRole = (roleId: string) => {
        editMutation.mutate({ roleId, name: 'new name' });
    };

    const handleDeleteRole = (roleId: string) => {
        deleteMutation.mutate(roleId);
        refetchRoles();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' className='w-full sm:w-auto'>
                    <Settings className='h-5 w-5 mr-2' />
                    Manage Roles
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Manage Roles</DialogTitle>
                </DialogHeader>
                <div className='space-y-4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Add New Role</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='flex space-x-2'>
                                <Input
                                    placeholder='New role name'
                                    value={newRoleName}
                                    onChange={(e) =>
                                        setNewRoleName(e.target.value)
                                    }
                                />
                                <Button
                                    onClick={handleAddRole}
                                    disabled={!newRoleName.trim()}
                                >
                                    <Plus className='h-4 w-4 mr-2' />
                                    Add
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Existing Roles</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {isRoleLoading ? (
                                <div className='flex justify-center items-center h-[200px]'>
                                    <Loader2 className='h-8 w-8 animate-spin' />
                                </div>
                            ) : roleError ? (
                                <Alert variant='destructive'>
                                    <AlertCircle className='h-4 w-4' />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>
                                        Failed to load roles. Please try again
                                        later.
                                    </AlertDescription>
                                </Alert>
                            ) : (
                                <ScrollArea className='h-[200px]'>
                                    <ul className='space-y-2'>
                                        {roleData &&
                                            roleData.map((role) => (
                                                <li
                                                    key={role.id}
                                                    className='flex items-center justify-between'
                                                >
                                                    <span>{role.name}</span>
                                                    <div>
                                                        <Button
                                                            variant='ghost'
                                                            size='sm'
                                                            onClick={() =>
                                                                handleEditRole(
                                                                    role.id,
                                                                )
                                                            }
                                                        >
                                                            <Pencil className='h-4 w-4' />
                                                            <span className='sr-only'>
                                                                Edit {role.name}
                                                            </span>
                                                        </Button>
                                                        <Button
                                                            variant='ghost'
                                                            size='sm'
                                                            onClick={() =>
                                                                handleDeleteRole(
                                                                    role.id,
                                                                )
                                                            }
                                                        >
                                                            <Trash2 className='h-4 w-4' />
                                                            <span className='sr-only'>
                                                                Delete{' '}
                                                                {role.name}
                                                            </span>
                                                        </Button>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </ScrollArea>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    );
}
