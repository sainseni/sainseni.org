import { Scroll, ScrollText } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import AllReferenceTable from './all-reference-table';
import PendingReferenceTable from './pending-reference-table';

export default function ReferencesPage() {
    return (
        <>
            <div className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
                <div className='grid gap-4 md:gap-8 lg:grid-cols-3'>
                    <Card x-chunk='dashboard-01-chunk-0'>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Total
                            </CardTitle>
                            <ScrollText className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>$45,231.89</div>
                            <p className='text-xs text-muted-foreground'>
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk='dashboard-01-chunk-1'>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Total Draft (Pending)
                            </CardTitle>
                            <Scroll className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold text-yellow-400'>
                                +2350
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                +180.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk='dashboard-01-chunk-2'>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Total Rejected
                            </CardTitle>
                            <Scroll className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold text-red-500'>
                                +2350
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                +180.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
                    <AllReferenceTable />
                    <PendingReferenceTable />
                </div>
            </div>
        </>
    );
}
