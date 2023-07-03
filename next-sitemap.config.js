/** @type {import('next-sitemap').IConfig} */

import { domain } from '~/site.config';

export const siteUrl = domain;
export const generateRobotsTxt = true;
export const robotsTxtOptions = {
    policies: [{ userAgent: '*', allow: '/' }],
};
