import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
    titleTemplate: '%s | Sainseni',
    defaultTitle: 'Community',
    description: 'Communty for community',
    canonical: 'https://sainseni.org/',
    openGraph: {
        url: 'https://sainseni.org/',
        title: 'Sainseni for community',
        description: 'Community for community',
        images: [
            {
                url: 'https://sainseni.org/thumbnail.png',
                width: 1920,
                height: 1080,
                alt: 'Sainseni for community',
            },
        ],
        site_name: 'Sainseni',
    },
    twitter: {
        handle: '@sainseni',
        site: '@sainseni',
        cardType: 'summary_large_image',
    },
};

export default config;
