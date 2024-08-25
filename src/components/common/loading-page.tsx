'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const loadingMessages = [
    'Brewing your content...',
    'Fetching digital goodies...',
    'Assembling awesome stuff...',
    'Preparing mind-blowing data...',
    'Loading coolness...',
];

function useLoadingMessage(messages: string[], interval: number) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, interval);

        return () => clearInterval(timer);
    }, [messages, interval]);

    return messages[currentIndex];
}

export default function LoadingPage() {
    const message = useLoadingMessage(loadingMessages, 2000);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white'>
            <motion.div
                className='w-32 h-32 bg-blue-500 rounded-full'
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <div className='h-20 mt-8'>
                {' '}
                {/* Fixed height container for text */}
                <AnimatePresence mode='wait'>
                    <motion.h1
                        key={message}
                        className='text-3xl font-bold text-gray-800 text-center'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {message}
                    </motion.h1>
                </AnimatePresence>
            </div>
            <motion.div className='flex mt-4'>
                {[0, 1, 2].map((index) => (
                    <motion.span
                        key={index}
                        className='w-3 h-3 mx-1 bg-blue-400 rounded-full'
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: index * 0.2,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}
