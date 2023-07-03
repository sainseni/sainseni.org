import { ChakraProvider } from '@chakra-ui/react';
import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import '@fontsource-variable/nunito';

import '@/styles/globals.css';

import { api } from '@/utils/api';

import { theme } from '@/styles/theme';

import SEO from '~/next-seo.config';

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <ChakraProvider theme={theme}>
            <SessionProvider session={session}>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </SessionProvider>
        </ChakraProvider>
    );
};

export default api.withTRPC(MyApp);
