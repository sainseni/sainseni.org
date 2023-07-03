import site from '~/site.config';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    titleTemplate: '%s | ' + site.name,
    defaultTitle: site.name,
    description: site.description,
    canonical: site.domain,
    noindex: false,
    nofollow: false,
    openGraph: {
        url: site.domain,
        title: site.name,
        description: site.description,
        images: [
            {
                url: site.domain + site.thumbnail,
                width: 1920,
                height: 1080,
                alt: site.description,
            },
        ],
        site_name: site.name,
    },
    twitter: {
        handle: '@sainseni',
        site: '@sainseni',
        cardType: 'summary_large_image',
    },
};
