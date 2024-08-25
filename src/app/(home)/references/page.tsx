'use client';

import { format, parseISO } from 'date-fns';
import {
    BookOpen,
    ExternalLink,
    Filter,
    Loader2,
    PlusCircle,
    X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

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
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const allTags = [
    'AI',
    'Healthcare',
    'Technology',
    'Urban Planning',
    'Sustainability',
    'Environment',
    'Finance',
    'Blockchain',
    'Cryptocurrency',
    'Science',
    'Politics',
    'Education',
];

const initialReferenceList = [
    {
        id: 1,
        title: 'The Future of AI in Healthcare',
        date: '2023-07-15',
        tags: ['AI', 'Healthcare', 'Technology'],
        description:
            'An exploration of how artificial intelligence is revolutionizing the healthcare industry, from diagnosis to treatment planning.',
        link: 'https://example.com/ai-healthcare',
    },
    {
        id: 2,
        title: 'Sustainable Urban Planning',
        date: '2023-07-10',
        tags: ['Urban Planning', 'Sustainability', 'Environment'],
        description:
            'A comprehensive look at modern approaches to urban planning that prioritize sustainability and environmental conservation.',
        link: 'https://example.com/sustainable-urban-planning',
    },
    {
        id: 3,
        title: 'The Rise of Decentralized Finance',
        date: '2023-07-05',
        tags: ['Finance', 'Blockchain', 'Cryptocurrency'],
        description:
            'An analysis of the growing trend of decentralized finance (DeFi) and its potential impact on traditional banking systems.',
        link: 'https://example.com/defi-rise',
    },
];

export default function ReferenesPage() {
    const [newLink, setNewLink] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [availableTags, setAvailableTags] = useState<string[]>([]);
    const [referenceList, setReferenceList] = useState(initialReferenceList);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filterTags, setFilterTags] = useState<string[]>([]);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setAvailableTags(allTags.filter((tag) => !selectedTags.includes(tag)));
    }, [selectedTags]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newLink && newTitle) {
            const newReference = {
                id: referenceList.length + 1,
                title: newTitle,
                date: format(new Date(), 'yyyy-MM-dd'),
                tags: selectedTags,
                description: newDescription || 'No description provided.',
                link: newLink,
            };
            setReferenceList([newReference, ...referenceList]);
            setNewLink('');
            setNewTitle('');
            setNewDescription('');
            setSelectedTags([]);
            setIsAddDialogOpen(false);
        }
    };

    const addTag = (tag: string) => {
        if (tag && !selectedTags.includes(tag)) {
            setSelectedTags((prevTags) => [...prevTags, tag]);
        }
    };

    const removeTag = (tagToRemove: string) => {
        setSelectedTags((prevTags) =>
            prevTags.filter((tag) => tag !== tagToRemove),
        );
    };

    const addFilterTag = (tag: string) => {
        if (tag && !filterTags.includes(tag)) {
            setFilterTags((prevTags) => [...prevTags, tag]);
        }
    };

    const removeFilterTag = (tagToRemove: string) => {
        setFilterTags((prevTags) =>
            prevTags.filter((tag) => tag !== tagToRemove),
        );
    };

    const filteredReferences = referenceList.filter((item) => {
        const matchesKeyword =
            item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.description
                .toLowerCase()
                .includes(searchKeyword.toLowerCase());
        const matchesTags =
            filterTags.length === 0 ||
            filterTags.every((tag) => item.tags.includes(tag));
        return matchesKeyword && matchesTags;
    });

    const fetchMetadata = async () => {
        if (!newLink) {
            toast({
                title: 'Error',
                description: 'Please enter a valid URL',
                variant: 'destructive',
            });
            return;
        }

        setIsLoading(true);
        try {
            // In a real application, you would make an API call to your backend here
            // For this example, we'll simulate a delay and return mock data
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Mock metadata
            const mockMetadata = {
                title: 'Example Article Title',
                description: 'This is an example description for the article.',
                tags: ['Technology', 'AI'],
            };

            setNewTitle(mockMetadata.title);
            setNewDescription(mockMetadata.description);
            setSelectedTags(mockMetadata.tags);

            toast({
                title: 'Success',
                description: 'Metadata fetched successfully',
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to fetch metadata',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='container mx-auto p-4'>
            <div className='flex justify-between items-center mb-6'>
                <h1 className='text-3xl font-bold'>Our Reference List</h1>
                <Dialog
                    open={isAddDialogOpen}
                    onOpenChange={setIsAddDialogOpen}
                >
                    <DialogTrigger asChild>
                        <Button>
                            <PlusCircle className='mr-2 h-4 w-4' />
                            Add New
                        </Button>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-[425px] lg:max-w-[600px]'>
                        <DialogHeader>
                            <DialogTitle>Add New</DialogTitle>
                            <DialogDescription>
                                Add a new reference to the list. Fill in the
                                details below.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='space-y-2'>
                                <Label htmlFor='link'>Link</Label>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                    <Input
                                        id='link'
                                        value={newLink}
                                        onChange={(e) =>
                                            setNewLink(e.target.value)
                                        }
                                        placeholder='Paste reference link here'
                                        required
                                        className='flex-grow'
                                    />
                                    <Button
                                        type='button'
                                        variant='outline'
                                        onClick={fetchMetadata}
                                        disabled={isLoading}
                                        className='w-full sm:w-auto'
                                    >
                                        {isLoading ? (
                                            <Loader2 className='h-4 w-4 animate-spin' />
                                        ) : (
                                            'Get Metadata'
                                        )}
                                    </Button>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='title'>Title</Label>
                                <Input
                                    id='title'
                                    value={newTitle}
                                    onChange={(e) =>
                                        setNewTitle(e.target.value)
                                    }
                                    placeholder='Enter reference title'
                                    required
                                />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='description'>Description</Label>
                                <Textarea
                                    id='description'
                                    value={newDescription}
                                    onChange={(e) =>
                                        setNewDescription(e.target.value)
                                    }
                                    placeholder='Enter a brief description'
                                    rows={3}
                                />
                            </div>
                            <div className='space-y-2'>
                                <Label>Tags</Label>
                                <div className='flex flex-wrap gap-2'>
                                    {selectedTags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant='secondary'
                                            className='px-2 py-1'
                                        >
                                            {tag}
                                            <button
                                                type='button'
                                                onClick={() => removeTag(tag)}
                                                className='ml-1 text-muted-foreground hover:text-foreground'
                                                aria-label={`Remove ${tag} tag`}
                                            >
                                                <X className='h-3 w-3' />
                                            </button>
                                        </Badge>
                                    ))}
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                type='button'
                                                variant='outline'
                                                size='sm'
                                                className='h-7'
                                            >
                                                <PlusCircle className='h-4 w-4' />
                                                <span className='sr-only'>
                                                    Add tag
                                                </span>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className='w-64 p-0'>
                                            <Command>
                                                <CommandInput placeholder='Search tags...' />
                                                <CommandList>
                                                    <CommandEmpty>
                                                        No tags found.
                                                    </CommandEmpty>
                                                    <CommandGroup>
                                                        {availableTags.map(
                                                            (tag) => (
                                                                <CommandItem
                                                                    key={tag}
                                                                    onSelect={() =>
                                                                        addTag(
                                                                            tag,
                                                                        )
                                                                    }
                                                                >
                                                                    {tag}
                                                                </CommandItem>
                                                            ),
                                                        )}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <Button type='submit' className='w-full'>
                                Add Reference
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <Card className='mb-6'>
                <CardHeader>
                    <CardTitle>
                        Find your references quickly and easily
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <div className='flex-grow'>
                            <Input
                                type='text'
                                placeholder='Search by keyword'
                                value={searchKeyword}
                                onChange={(e) =>
                                    setSearchKeyword(e.target.value)
                                }
                                className='w-full'
                                aria-label='Search by keyword'
                            />
                        </div>
                        <div className='flex-shrink-0'>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant='outline'>
                                        <Filter className='mr-2 h-4 w-4' />
                                        Filter by Tags
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-64 p-0'>
                                    <Command>
                                        <CommandInput placeholder='Search tags...' />
                                        <CommandList>
                                            <CommandEmpty>
                                                No tags found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {allTags.map((tag) => (
                                                    <CommandItem
                                                        key={tag}
                                                        onSelect={() =>
                                                            addFilterTag(tag)
                                                        }
                                                    >
                                                        {tag}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-2 mt-4'>
                        {filterTags.map((tag) => (
                            <Badge
                                key={tag}
                                variant='secondary'
                                className='px-2 py-1'
                            >
                                {tag}
                                <button
                                    type='button'
                                    onClick={() => removeFilterTag(tag)}
                                    className='ml-1 text-muted-foreground hover:text-foreground'
                                    aria-label={`Remove ${tag} filter`}
                                >
                                    <X className='h-3 w-3' />
                                </button>
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {filteredReferences.length > 0 ? (
                <div className='space-y-4'>
                    {filteredReferences.map((item) => (
                        <Card key={item.id}>
                            <CardHeader>
                                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
                                    <CardTitle className='mb-2 sm:mb-0'>
                                        <a
                                            href={item.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='hover:underline flex items-center'
                                        >
                                            {item.title}
                                            <ExternalLink className='ml-2 h-4 w-4' />
                                        </a>
                                    </CardTitle>
                                    <span className='text-sm text-muted-foreground'>
                                        {format(
                                            parseISO(item.date),
                                            'MMMM d, yyyy',
                                        )}
                                    </span>
                                </div>
                                <div className='flex flex-wrap gap-2 mt-2'>
                                    {item.tags.map((tag) => (
                                        <Badge key={tag} variant='secondary'>
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <Card>
                    <CardContent className='py-4'>
                        <div className='flex flex-col items-center text-center justify-center gap-y-2'>
                            <BookOpen className='h-12 w-12 text-muted-foreground ' />
                            <p className='text-lg font-medium'>
                                Your reference list is empty
                            </p>
                            <p className='text-muted-foreground'>
                                Add new references or adjust your search and
                                filter criteria to see results.
                            </p>
                            <Button onClick={() => setIsAddDialogOpen(true)}>
                                <PlusCircle className='mr-2 h-4 w-4' />
                                Add Your First Reference
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
