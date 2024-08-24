'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { EventCard, FeatureCard, ProjectCard } from './cards';
import { CollaborationIcon, GalleryIcon, TalkIcon } from './icons';

export default function Page() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <>
            <main className='flex-grow'>
                <section
                    id='hero'
                    className='relative overflow-hidden bg-gray-50'
                >
                    <motion.div
                        className='container mx-auto px-4 py-20 sm:py-32 flex flex-col md:flex-row items-center'
                        initial='hidden'
                        animate='visible'
                        variants={containerVariants}
                    >
                        <motion.div
                            className='md:w-1/2 mb-10 md:mb-0 md:pr-10'
                            variants={itemVariants}
                        >
                            <h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
                                Where Science Meets Art
                            </h1>
                            <p className='text-xl mb-8 text-gray-600'>
                                Discover the captivating intersection of
                                scientific discovery, technological innovation,
                                and artistic expression in our vibrant
                                community.
                            </p>
                            <div className='flex space-x-4'>
                                <Link href='/projects'>
                                    <Button className='bg-gray-800 text-white hover:bg-gray-700'>
                                        Discover More
                                    </Button>
                                </Link>
                                <Link
                                    href='https://github.com/sainseni'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <Button variant='outline'>
                                        Join Community
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            className='md:w-1/2 relative'
                            variants={itemVariants}
                        >
                            <Image
                                src='https://generated.vusercontent.net/placeholder.svg'
                                alt='Science and Art Fusion'
                                width={600}
                                height={400}
                                className='rounded-lg shadow-lg'
                            />
                            <motion.div
                                className='absolute top-1/4 left-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70'
                                animate={{
                                    x: [0, 30, 0, -30, 0],
                                    y: [0, 20, 40, 20, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    ease: 'linear',
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                            ></motion.div>
                            <motion.div
                                className='absolute top-1/2 right-0 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70'
                                animate={{
                                    x: [0, -30, 0, 30, 0],
                                    y: [0, -20, -40, -20, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    ease: 'linear',
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                            ></motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='absolute top-1/4 left-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70'
                        animate={{
                            x: [0, 30, 0],
                            y: [0, 20, 0],
                        }}
                        transition={{
                            duration: 15,
                            ease: 'easeInOut',
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                    ></motion.div>
                    <motion.div
                        className='absolute top-1/2 right-0 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70'
                        animate={{
                            x: [0, -30, 0],
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 15,
                            ease: 'easeInOut',
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                    ></motion.div>
                </section>

                <motion.section
                    id='features'
                    className='py-20'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <div className='container mx-auto px-4'>
                        <motion.h2
                            className='text-3xl font-bold mb-12 text-center'
                            variants={itemVariants}
                        >
                            Our Community Features
                        </motion.h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <motion.div variants={itemVariants}>
                                <FeatureCard
                                    title='Collaborative Projects'
                                    description='Connect with like-minded individuals to create innovative projects that bridge science and art.'
                                    icon={<CollaborationIcon />}
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <FeatureCard
                                    title='Expert Talks'
                                    description='Attend virtual lectures and workshops led by renowned scientists and artists from around the world.'
                                    icon={<TalkIcon />}
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <FeatureCard
                                    title='Exhibition Space'
                                    description='Showcase your work in our online gallery, where scientific concepts meet artistic interpretation.'
                                    icon={<GalleryIcon />}
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id='projects'
                    className='py-20'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <div className='container mx-auto px-4'>
                        <motion.h2
                            className='text-3xl font-bold mb-12 text-center'
                            variants={itemVariants}
                        >
                            Featured Projects
                        </motion.h2>
                        {featuredProjects.length === 0 ? (
                            <motion.p
                                className='text-xl text-center text-gray-600'
                                variants={itemVariants}
                            >
                                No projects available at this time.
                            </motion.p>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                                {featuredProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                    >
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            image={project.image}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.section>

                <motion.section
                    id='events'
                    className='py-20 bg-gray-50'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <div className='container mx-auto px-4'>
                        <motion.h2
                            className='text-3xl font-bold mb-12 text-center'
                            variants={itemVariants}
                        >
                            Upcoming Events
                        </motion.h2>
                        {upcomingEvents.length === 0 ? (
                            <motion.p
                                className='text-xl text-center text-gray-600'
                                variants={itemVariants}
                            >
                                No events scheduled at this time.
                            </motion.p>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                {upcomingEvents.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                    >
                                        <EventCard
                                            title={event.title}
                                            date={event.date}
                                            description={event.description}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.section>

                <motion.section
                    id='join'
                    className='py-20 text-center'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <div className='container mx-auto px-4'>
                        <motion.h2
                            className='text-3xl font-bold mb-6'
                            variants={itemVariants}
                        >
                            Join Our Community
                        </motion.h2>
                        <motion.p
                            className='text-xl mb-8 max-w-2xl mx-auto'
                            variants={itemVariants}
                        >
                            Be part of a growing network of scientists,
                            technologists, artists, and enthusiasts exploring
                            the cutting-edge boundaries of creativity and
                            discovery.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Link
                                href='https://github.com/sainseni'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <Button className='bg-gray-800 text-white hover:bg-gray-700'>
                                    Join Community
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>
            </main>
        </>
    );
}

type FeaturedProject = {
    title: string;
    description: string;
    image: string;
};
const featuredProjects: FeaturedProject[] = [];

type UpcomingEvent = {
    title: string;
    date: string;
    description: string;
};
const upcomingEvents: UpcomingEvent[] = [];
