import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

export default function AllReferenceTable() {
    return (
        <Card className='col-span-2' x-chunk='dashboard-01-chunk-4'>
            <CardHeader className='flex flex-row items-center'>
                <div className='grid gap-2'>
                    <CardTitle>References</CardTitle>
                    <CardDescription>Recently added.</CardDescription>
                </div>
                <Button asChild size='sm' className='ml-auto gap-1'>
                    <Link href='#'>
                        Add New
                        <ArrowUpRight className='h-4 w-4' />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Tags</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className='text-right'>Link</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className='font-medium'>Liam Johnson</div>
                                <div className='text-sm text-muted-foreground md:inline'>
                                    liam@example.com
                                </div>
                            </TableCell>
                            <TableCell className='table-cell'>Sale</TableCell>
                            <TableCell className='table-cell'>
                                <Badge className='text-xs' variant='outline'>
                                    Approved
                                </Badge>
                            </TableCell>
                            <TableCell className='table-cell'>
                                2023-06-23
                            </TableCell>
                            <TableCell className='text-right'>
                                $250.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className='font-medium'>Olivia Smith</div>
                                <div className='text-sm text-muted-foreground md:inline'>
                                    olivia@example.com
                                </div>
                            </TableCell>
                            <TableCell className='table-cell'>Refund</TableCell>
                            <TableCell className='table-cell'>
                                <Badge className='text-xs' variant='outline'>
                                    Declined
                                </Badge>
                            </TableCell>
                            <TableCell className='table-cell'>
                                2023-06-24
                            </TableCell>
                            <TableCell className='text-right'>
                                $150.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className='font-medium'>Noah Williams</div>
                                <div className='text-sm text-muted-foreground md:inline'>
                                    noah@example.com
                                </div>
                            </TableCell>
                            <TableCell className='table-cell'>
                                Subscription
                            </TableCell>
                            <TableCell className='table-cell'>
                                <Badge className='text-xs' variant='outline'>
                                    Approved
                                </Badge>
                            </TableCell>
                            <TableCell className='table-cell'>
                                2023-06-25
                            </TableCell>
                            <TableCell className='text-right'>
                                $350.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className='font-medium'>Emma Brown</div>
                                <div className='text-sm text-muted-foreground md:inline'>
                                    emma@example.com
                                </div>
                            </TableCell>
                            <TableCell className='table-cell'>Sale</TableCell>
                            <TableCell className='table-cell'>
                                <Badge className='text-xs' variant='outline'>
                                    Approved
                                </Badge>
                            </TableCell>
                            <TableCell className='table-cell'>
                                2023-06-26
                            </TableCell>
                            <TableCell className='text-right'>
                                $450.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className='font-medium'>Liam Johnson</div>
                                <div className='text-sm text-muted-foreground md:inline'>
                                    liam@example.com
                                </div>
                            </TableCell>
                            <TableCell className='table-cell'>Sale</TableCell>
                            <TableCell className='table-cell'>
                                <Badge className='text-xs' variant='outline'>
                                    Approved
                                </Badge>
                            </TableCell>
                            <TableCell className='table-cell'>
                                2023-06-27
                            </TableCell>
                            <TableCell className='text-right'>
                                $550.00
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
