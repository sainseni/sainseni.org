'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <main className='flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 overflow-hidden'>
                <motion.div
                    className='text-9xl font-bold mb-8 flex items-center justify-center'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        4
                    </motion.span>
                    <motion.div
                        className='mx-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center'
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: 'linear',
                        }}
                    >
                        <Search className='w-12 h-12 text-primary-foreground' />{' '}
                    </motion.div>
                    <motion.span
                        animate={{ rotate: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        4
                    </motion.span>
                </motion.div>
                <motion.h1
                    className='text-2xl font-bold mb-4 text-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Oops! You&apos;ve stumbled into a cosmic void!
                </motion.h1>
                <motion.p
                    className='text-xl mb-8 text-center max-w-md'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    The page you&apos;re seeking has vanished into a black hole.
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
                            Warp back to homepage
                        </Button>
                    </motion.div>
                </Link>
            </main>
        </>
    );
}
