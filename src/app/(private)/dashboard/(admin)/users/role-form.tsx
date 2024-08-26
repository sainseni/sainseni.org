'use client';

import {
    AlertCircle,
    Check,
    Loader2,
    Pencil,
    Plus,
    Settings,
    Trash2,
    X,
} from 'lucide-react';
import { KeyboardEvent, useState } from 'react';

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
import { useToast } from '@/components/ui/use-toast';

export default function RoleFormDialog() {
    const { toast } = useToast();
    const editMutation = useEditRoleName();
    const createMutation = useCreateRole();
    const deleteMutation = useDeleteRole();
    const [newRoleName, setNewRoleName] = useState('');
    const [editingRoleId, setEditingRoleId] = useState<string | null>(null);
    const [editingRoleName, setEditingRoleName] = useState('');
    const {
        data: roleData,
        isLoading: isRoleLoading,
        error: roleError,
        refetch: refetchRoles,
    } = useGetRoles({});

    const handleCreateRole = () => {
        if (newRoleName.trim()) {
            createMutation.mutate(newRoleName, {
                onSuccess: () => {
                    setNewRoleName('');
                    refetchRoles();
                    toast({
                        title: 'Success',
                        description: 'New role has been created.',
                    });
                },
                onError: () => {
                    toast({
                        title: 'Error',
                        description:
                            'Failed to create new role. Please try again.',
                        variant: 'destructive',
                    });
                },
            });
        }
    };

    const handleKeyPressCreate = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleCreateRole();
        }
    };

    const handleEditRole = (roleId: string, currentName: string) => {
        setEditingRoleId(roleId);
        setEditingRoleName(currentName);
    };

    const handleSaveEdit = (roleId: string) => {
        if (editingRoleName.trim()) {
            editMutation.mutate(
                { roleId, name: editingRoleName },
                {
                    onSuccess: () => {
                        setEditingRoleId(null);
                        refetchRoles();
                        toast({
                            title: 'Success',
                            description: 'Role name has been updated.',
                        });
                    },
                    onError: () => {
                        toast({
                            title: 'Error',
                            description:
                                'Failed to update role name. Please try again.',
                            variant: 'destructive',
                        });
                    },
                },
            );
        }
    };

    const handleKeyPressEdit = (
        event: KeyboardEvent<HTMLInputElement>,
        roleId: string,
    ) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSaveEdit(roleId);
        }
    };

    const handleCancelEdit = () => {
        setEditingRoleId(null);
        setEditingRoleName('');
    };

    const handleDeleteRole = (roleId: string) => {
        deleteMutation.mutate(roleId, {
            onSuccess: () => {
                refetchRoles();
                toast({
                    title: 'Success',
                    description: 'Role has been deleted.',
                });
            },
            onError: () => {
                toast({
                    title: 'Error',
                    description: 'Failed to delete role, role may be in use.',
                    variant: 'destructive',
                });
            },
        });
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
                            <CardTitle>Create New Role</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='flex space-x-2'>
                                <Input
                                    placeholder='New role name'
                                    value={newRoleName}
                                    onChange={(e) =>
                                        setNewRoleName(e.target.value)
                                    }
                                    onKeyPress={handleKeyPressCreate}
                                />
                                <Button
                                    onClick={handleCreateRole}
                                    disabled={
                                        !newRoleName.trim() ||
                                        createMutation.isPending
                                    }
                                >
                                    {createMutation.isPending ? (
                                        <Loader2 className='h-4 w-4 animate-spin' />
                                    ) : (
                                        <Plus className='h-4 w-4' />
                                    )}
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
                            ) : roleData && roleData.length > 0 ? (
                                <ScrollArea className='h-[200px]'>
                                    <ul className='space-y-2'>
                                        {roleData.map((role) => (
                                            <li
                                                key={role.id}
                                                className='flex items-center justify-between'
                                            >
                                                {editingRoleId === role.id ? (
                                                    <Input
                                                        value={editingRoleName}
                                                        onChange={(e) =>
                                                            setEditingRoleName(
                                                                e.target.value,
                                                            )
                                                        }
                                                        onKeyDown={(e) =>
                                                            handleKeyPressEdit(
                                                                e,
                                                                role.id,
                                                            )
                                                        }
                                                        className='w-1/2 focus-visible:ring-0'
                                                    />
                                                ) : (
                                                    <span>{role.name}</span>
                                                )}
                                                <div>
                                                    {editingRoleId ===
                                                    role.id ? (
                                                        <>
                                                            <Button
                                                                variant='ghost'
                                                                size='sm'
                                                                onClick={() =>
                                                                    handleSaveEdit(
                                                                        role.id,
                                                                    )
                                                                }
                                                                disabled={
                                                                    editMutation.isPending
                                                                }
                                                            >
                                                                {editMutation.isPending ? (
                                                                    <Loader2 className='h-4 w-4 animate-spin' />
                                                                ) : (
                                                                    <Check className='h-4 w-4' />
                                                                )}
                                                                <span className='sr-only'>
                                                                    Save
                                                                </span>
                                                            </Button>
                                                            <Button
                                                                variant='ghost'
                                                                size='sm'
                                                                onClick={
                                                                    handleCancelEdit
                                                                }
                                                            >
                                                                <X className='h-4 w-4' />
                                                                <span className='sr-only'>
                                                                    Cancel
                                                                </span>
                                                            </Button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Button
                                                                variant='ghost'
                                                                size='sm'
                                                                onClick={() =>
                                                                    handleEditRole(
                                                                        role.id,
                                                                        role.name,
                                                                    )
                                                                }
                                                            >
                                                                <Pencil className='h-4 w-4' />
                                                                <span className='sr-only'>
                                                                    Edit{' '}
                                                                    {role.name}
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
                                                                disabled={
                                                                    deleteMutation.isPending
                                                                }
                                                            >
                                                                {deleteMutation.isPending &&
                                                                deleteMutation.variables ===
                                                                    role.id ? (
                                                                    <Loader2 className='h-4 w-4 animate-spin' />
                                                                ) : (
                                                                    <Trash2 className='h-4 w-4' />
                                                                )}
                                                                <span className='sr-only'>
                                                                    Delete{' '}
                                                                    {role.name}
                                                                </span>
                                                            </Button>
                                                        </>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            ) : (
                                <div className='flex justify-center items-center h-[200px]'>
                                    <span className='text-gray-500'>
                                        No roles found. Create a new role to get
                                        started.
                                    </span>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    );
}
