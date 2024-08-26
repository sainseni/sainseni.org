'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import settings from '@/data/settings';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <motion.footer
            className='py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200'
            initial='hidden'
            animate='visible'
            variants={containerVariants}
        >
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <motion.p
                    className='text-sm mb-4 md:mb-0'
                    variants={itemVariants}
                >
                    &copy; {currentYear}{' '}
                    <motion.span
                        className='font-bold'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {settings.sitename}
                    </motion.span>
                    {currentYear && '. All rights reserved.'}
                </motion.p>
                <motion.div className='flex space-x-4' variants={itemVariants}>
                    <Link href='/contact' passHref legacyBehavior>
                        <motion.a
                            className='text-sm hover:underline'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.a>
                    </Link>
                </motion.div>
            </div>
        </motion.footer>
    );
}
