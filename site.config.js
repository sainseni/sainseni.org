// eslint-disable-next-line import/no-anonymous-default-export
export default {
    domain: process.env.NEXTAUTH_URL || 'https://localhost:3000',
    name: 'Sainseni',
    description:
        'A software engineer who focus on backend development but also likes user interface. Mathematics student. Indonesian.',
    socials: [
        { href: 'https://github.com/sainseni', label: 'Github' },
        { href: 'https://twitter.com/sainseni', label: 'Twitter' },
        { href: 'https://medium.com/@sainseni', label: 'Medium' },
        {
            href: 'https://www.linkedin.com/company/sainseni',
            label: 'Linkedin',
        },
    ],
    top_navlinks: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/blog', label: 'Blog' },
        { href: '/projects', label: 'Projects' },
    ],
    bottom_navlinks: [
        { href: '/about', label: 'About' },
        { href: '/team', label: 'Team' },
        { href: '/feedback', label: 'Feedback' },
        { href: '/contact', label: 'Contact' },
        { href: '/policy', label: 'Privacy' },
    ],
};
