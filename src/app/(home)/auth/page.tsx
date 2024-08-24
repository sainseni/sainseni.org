'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function SignInPage() {
    // const handleSSOLogin = (provider: string) => {
    //     // Handle SSO login logic here
    //     // console.log('SSO login with:', provider);
    // };

    return (
        <div className='flex-1 flex items-center justify-center bg-background p-4'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full max-w-md'
            >
                <Card>
                    <CardHeader className='space-y-1'>
                        <CardTitle className='text-2xl font-bold text-center'>
                            Sign in to your account
                        </CardTitle>
                        <CardDescription className='text-center'>
                            Choose your preferred sign-in method
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                variant='outline'
                                className='w-full h-12 text-base font-medium'
                                // onClick={() => handleSSOLogin('github')}
                            >
                                <svg
                                    className='mr-2 h-5 w-5'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z'
                                    />
                                </svg>
                                Continue with GitHub
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                variant='outline'
                                className='w-full h-12 text-base font-medium'
                                // onClick={() => handleSSOLogin('google')}
                            >
                                <svg
                                    className='mr-2 h-5 w-5'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                                    />
                                    <path
                                        fill='currentColor'
                                        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                                    />
                                    <path
                                        fill='currentColor'
                                        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                                    />
                                    <path
                                        fill='currentColor'
                                        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                                    />
                                    <path fill='none' d='M1 1h22v22H1z' />
                                </svg>
                                Continue with Google
                            </Button>
                        </motion.div>
                        <div className='text-center text-sm text-muted-foreground'>
                            By continuing, you agree to our{' '}
                            <Link
                                href='/terms'
                                className='underline underline-offset-4 hover:text-primary'
                            >
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link
                                href='/privacy'
                                className='underline underline-offset-4 hover:text-primary'
                            >
                                Privacy Policy
                            </Link>
                            .
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
