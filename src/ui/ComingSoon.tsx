import { Flex, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import React from 'react';

export default function ComingSoon() {
    return (
        <>
            <NextSeo title='Coming Soon' />
            <Flex
                w='100vw'
                h='100vh'
                align='center'
                justify='center'
                direction='row'
                bg='bg.light'
            >
                <Text
                    as='h1'
                    fontSize={{
                        base: '7xl',
                    }}
                    color='text.light'
                    fontWeight='bold'
                    lineHeight={1}
                    textAlign='center'
                >
                    Coming Soon
                    <Text as='span' color='secondary.500'>
                        .
                    </Text>
                </Text>
            </Flex>
        </>
    );
}
