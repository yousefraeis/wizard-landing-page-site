import {
    acmeLogo,
    quantumLogo,
    echoLogo,
    celestialLogo,
    pulseLogo,
    apexLogo,
} from '../assets/images';

import {
    EcosystemIcon,
    instaIcon,
    xSocial,
    tiktokIcon,
    youtubeIcon,
} from '../assets/icons';

export const bannerMessage = {
    text: 'Introducing a completely redesigned interface -',
    linkText: 'Explore the demo',
    linkHref: '#',
    show: true,
};

export const logoTicker = [
    { src: acmeLogo, alt: 'Acme Logo' },
    { src: quantumLogo, alt: 'Quantum Logo' },
    { src: echoLogo, alt: 'Echo Logo' },
    { src: celestialLogo, alt: 'Celestial Logo' },
    { src: pulseLogo, alt: 'Pulse Logo' },
    { src: apexLogo, alt: 'Apex Logo' },
];

export const featuresCards = [
    {
        icon: EcosystemIcon,
        title: 'Integration Ecosystem',
        description:
            'Enhance your productivity by connecting with your tools, keeping your essentials in one place.',
    },
    {
        icon: EcosystemIcon,
        title: 'Goal Setting and Tracking',
        description:
            'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.',
    },
    {
        icon: EcosystemIcon,
        title: 'Secure Data Encryption',
        description:
            'With end-to-end encryption, your data is securely stored and protected from unauthorized access.',
    },
];

export const itemsFAQs = [
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.',
    },
    {
        question: 'How does the pricing work for teams?',
        answer: 'Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.',
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.',
    },
    {
        question: 'Is my data secure?',
        answer: 'Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.',
    },
];

export const socialIcons = [
    { src: instaIcon, alt: 'Instagram', href: '#' },
    { src: xSocial, alt: 'X', href: '#' },
    { src: tiktokIcon, alt: 'Tiktok', href: '#' },
    { src: youtubeIcon,alt: "Youtube" ,href: '#' },
];
