import { Button, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import React from 'react';

import { REASON_PHRASES, STATUS_CODES } from '@/utils/http';

type ErrorPageProps = {
    statusCode: number;
};

export default function ErrorPage({
    statusCode = STATUS_CODES.NOT_FOUND,
}: ErrorPageProps) {
    const description = REASON_PHRASES[statusCode];
    return (
        <>
            <NextSeo title={`${statusCode} ${description}`} />
            <Flex
                w='100vw'
                h='100vh'
                align='center'
                justify='center'
                direction='column'
                bg={useColorModeValue('bg.light', 'bg.dark')}
            >
                <Stack gap='3' alignItems='center'>
                    <Stack alignItems='center'>
                        <Text
                            as='h1'
                            fontSize={{
                                base: '7xl',
                            }}
                            color={useColorModeValue('text.light', 'text.dark')}
                            fontWeight='bold'
                            lineHeight={1}
                            textAlign='center'
                        >
                            {statusCode}
                        </Text>
                        <Text
                            as='h1'
                            fontSize={{
                                base: '3xl',
                            }}
                            fontWeight='bold'
                            textAlign='center'
                            color={useColorModeValue('text.light', 'text.dark')}
                        >
                            {description}
                        </Text>
                    </Stack>
                    <Link href='/' passHref legacyBehavior>
                        <Button
                            as='a'
                            bg='secondary.500'
                            color='text.dark'
                            rounded='base'
                            paddingX={4}
                            paddingY={2}
                            lineHeight={1}
                            _hover={{
                                bg: 'primary.500',
                                scale: 1.5,
                            }}
                            fontWeight='bold'
                        >
                            Back to home
                        </Button>
                    </Link>
                </Stack>
            </Flex>
        </>
    );
}
