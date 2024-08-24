'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { Button } from '@/components/ui/button';

interface ErrorProps {
    statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
    return (
        <>
            <NextSeo
                title={
                    statusCode
                        ? `${statusCode} - Error Occurred`
                        : 'An Error Occurred'
                }
            />
            <main className='flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 overflow-hidden'>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    <AlertTriangle className='w-24 h-24 text-yellow-500 mb-8' />
                </motion.div>
                <motion.h1
                    className='text-4xl font-bold mb-4 text-center'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Cosmic Glitch Detected
                </motion.h1>
                <motion.p
                    className='text-xl mb-8 text-center max-w-md'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {statusCode
                        ? `Houston, we've encountered a ${statusCode} anomaly.`
                        : 'An unexpected error has warped our space-time continuum.'}
                </motion.p>
                <Link href='/' passHref>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant='outline' className='group text-lg'>
                            <motion.span
                                className='mr-2 inline-block'
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: 'linear',
                                }}
                            >
                                🚀
                            </motion.span>
                            Return to Mission Control
                        </Button>
                    </motion.div>
                </Link>
            </main>
        </>
    );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
