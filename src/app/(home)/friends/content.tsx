'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TwitterIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
    >
        <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
    >
        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
        <rect x='2' y='9' width='4' height='12'></rect>
        <circle cx='4' cy='4' r='2'></circle>
    </svg>
);

const GithubIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
    >
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
    </svg>
);

const friends = [
    {
        name: 'M. Zakiyuddin Munziri',
        username: '@zakiego',
        image: '/placeholder.svg?height=100&width=100',
        tags: ['Software Engineer'],
        social: {
            twitter: 'https://twitter.com/zakiego',
            linkedin: 'https://www.linkedin.com/in/mzakiyuddin/',
            github: 'https://github.com/zakiego',
        },
    },
    {
        name: 'M. Husni Nur Fadillah',
        username: '@husfuu',
        image: '/placeholder.svg?height=100&width=100',
        tags: ['Backend Engineer'],
        social: {
            twitter: 'https://twitter.com/tanakafuu',
            linkedin:
                'https://www.linkedin.com/in/muhammad-husni-nur-fadillah/',
            github: 'https://github.com/husfuu',
        },
    },
    {
        name: 'Khoironi Kurnia Syah',
        username: '@zekhoi',
        image: '/placeholder.svg?height=100&width=100',
        tags: ['Product Engineer'],
        social: {
            twitter: 'https://twitter.com/zekhoi',
            linkedin: 'https://linkedin.com/in/khoironiks/',
            github: 'https://github.com/zekhoi',
        },
    },
    {
        name: 'Bryan Lumbantobing',
        username: '@rzkiypratama',
        image: '/placeholder.svg?height=100&width=100',
        tags: ['Frontend Engineer'],
        social: {
            twitter: 'https://twitter.com/rzkiypratama',
            linkedin: 'https://www.linkedin.com/in/rzkiypratama/',
            github: 'https://github.com/rzkiypratama',
        },
    },
];

const allTags = [
    'Product Engineer',
    'Frontend Engineer',
    'AI Research Engineer',
    'Software Engineer',
    'Machine Learning Engineer',
    'Backend Engineer',
    'Chief Technology Officer',
    'Cloud Engineer',
    'Tech Recruiter',
    'UI/UX Engineer',
    'DevOps Engineer',
];

export default function Component() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const tags = searchParams.get('tags');
        if (tags) {
            setSelectedTags(
                tags.split(',').filter((tag) => allTags.includes(tag)),
            );
        }
    }, [searchParams]);

    const toggleTag = (tag: string) => {
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => t !== tag)
            : [...selectedTags, tag];

        setSelectedTags(newTags);
        updateUrlParams(newTags);
    };

    const updateUrlParams = (tags: string[]) => {
        const params = new URLSearchParams(searchParams);
        if (tags.length > 0) {
            params.set('tags', tags.join(','));
        } else {
            params.delete('tags');
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    const filteredFriends = friends.filter(
        (friend) =>
            (selectedTags.length === 0 ||
                friend.tags.some((tag) => selectedTags.includes(tag))) &&
            (searchQuery === '' ||
                friend.name.toLowerCase().includes(searchQuery.toLowerCase())),
    );

    return (
        <main className='flex-1 overflow-y-auto py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
                <motion.h1
                    className='text-4xl font-bold mb-4 text-gray-900'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Meet our inspiring circle of friends.
                </motion.h1>
                <motion.p
                    className='text-lg text-gray-600 mb-8'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Introducing our incredible circle of friends—role models,
                    idols, and fellow tech enthusiasts. They share their
                    expertise on social media, helping me grow and deepen our
                    knowledge in the tech world. Our circle currently includes{' '}
                    {friends.length} amazing friends, and it&rsquo;s only
                    growing.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Input
                        className='mb-6'
                        placeholder='Search by name'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </motion.div>

                <motion.div
                    className='mb-6 bg-gray-100 p-4 rounded-lg'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className='text-lg font-semibold mb-2 text-gray-800'>
                        Filter by expertise:
                    </h2>
                    <div className='overflow-x-auto'>
                        <div className='flex items-center space-x-2 pb-2'>
                            {allTags.map((tag) => (
                                <motion.div
                                    key={tag}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant='outline'
                                        size='sm'
                                        className={`whitespace-nowrap ${
                                            selectedTags.includes(tag)
                                                ? 'bg-blue-500 text-white hover:bg-blue-600 border-blue-500'
                                                : 'bg-white text-gray-800 hover:bg-gray-200 border-gray-300'
                                        }`}
                                        onClick={() => toggleTag(tag)}
                                    >
                                        {tag}
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence>
                    <motion.div
                        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        {filteredFriends.map((friend, index) => (
                            <motion.div
                                key={friend.username}
                                className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-full'
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <div className='w-24 h-24 relative mb-4'>
                                    <Image
                                        src={friend.image}
                                        alt={friend.name}
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded-full'
                                    />
                                </div>
                                <h3 className='font-semibold text-lg text-gray-900'>
                                    {friend.name}
                                </h3>
                                <p className='text-gray-600 mb-2'>
                                    {friend.username}
                                </p>
                                <div className='flex flex-wrap justify-center mb-4'>
                                    {friend.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className='text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full m-1'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex space-x-4 mt-2'>
                                    <a
                                        href={friend.social.twitter}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-400 hover:text-blue-500'
                                    >
                                        <TwitterIcon />
                                        <span className='sr-only'>
                                            Twitter profile of {friend.name}
                                        </span>
                                    </a>
                                    <a
                                        href={friend.social.linkedin}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-700 hover:text-blue-800'
                                    >
                                        <LinkedinIcon />
                                        <span className='sr-only'>
                                            LinkedIn profile of {friend.name}
                                        </span>
                                    </a>
                                    <a
                                        href={friend.social.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-gray-800 hover:text-gray-900'
                                    >
                                        <GithubIcon />
                                        <span className='sr-only'>
                                            GitHub profile of {friend.name}
                                        </span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}
