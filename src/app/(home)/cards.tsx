import Image from 'next/image';

type FeatureCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
};
export function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full flex flex-col'>
            <div className='text-gray-800 mb-4'>{icon}</div>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-600 flex-grow'>{description}</p>
        </div>
    );
}
type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
};

export function ProjectCard({ title, description, image }: ProjectCardProps) {
    return (
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
            <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className='w-full object-cover'
            />
            <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                <p className='text-gray-600'>{description}</p>
            </div>
        </div>
    );
}

type EventCardProps = {
    title: string;
    date: string;
    description: string;
};

export function EventCard({ title, date, description }: EventCardProps) {
    return (
        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <div className='flex justify-between items-start mb-2'>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <span className='text-sm text-gray-500'>{date}</span>
            </div>
            <p className='text-gray-600'>{description}</p>
        </div>
    );
}
