import B2B from './project-images/dapixel.jpg';
import SwiftCart from './project-images/project-image2.jpg';
import WeatherSense from './project-images/WeatherSense.jpg';
import Bulk_dash from './project-images/Bulk_dash.jpeg';
import Bulk_LP from './project-images/Bulk_LP.jpeg';

export const projects = [
    {
        title: 'Bulk_SMS DashBoard',
        description: 'A user-friendly dashboard that enables businesses to manage bulk SMS, voice calls, and USSD messaging efficiently.',
        features: [
            'Bulk SMS and voice call composition interface',
            'Message scheduling and history tracking',
            'Contact management for organizing recipients',
            'Visual indicators for delivery status',
            'Responsive and intuitive design'
        ],
        techStack: ['React', 'Tailwind CSS', 'Shadcn/ui', 'Ant Design','Framer Motion'],
        image: Bulk_dash,
        link: 'https://bulk-manager-git-main-ngenoclintons-projects.vercel.app/dash',
        github: 'https://github.com/ngenoclinton/BulkManager'
    },
    {
        title: 'Bulk_SMS Landing Page',
        description: 'A visually appealing landing page that provides an overview of the Bulk SMS, Voice Call, and USSD services, designed to increase user engagement and conversions.',
        features: [
            'Responsive and mobile-friendly design',
            'Clear call-to-action buttons for conversions',
            'Service descriptions highlighting Bulk SMS, Voice Calls, and USSD',
            'Smooth animations and transitions for an engaging experience',
            'Contact and inquiry form for potential customers'
        ],
        techStack: ['React', 'Tailwind CSS', 'Shadcn/ui', 'Ant Design','Framer Motion'],
        image: Bulk_LP,
        link: 'https://bulk-manager-git-main-ngenoclintons-projects.vercel.app/',
        github: 'https://github.com/ngenoclinton/BulkManager'
    },
    {
        title: 'E-commerce Website',
        description: 'A sleek and modern e-commerce platform offering seamless shopping experiences with optimized UI/UX.',
        features: [
            'User-friendly navigation and product browsing',
            'Cart management and checkout functionality',
            'Responsive design for mobile and desktop users',
            'High-performance UI with React components'
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
        image: SwiftCart,
        link: "https://swift-cart.vercel.app/",
        github: 'https://github.com/ngenoclinton/SwiftCart'
    },
    {
        title: 'B2B Landing Page',
        description: 'A business-to-business landing page designed to showcase services and generate leads, built with modern frontend technologies.',
        features: [
            'Minimalist and professional UI design',
            'Fully responsive layout for all devices',
            'Optimized performance with Tailwind CSS',
            'Engaging call-to-action sections for lead generation'
        ],
        techStack: ['HTML', 'CSS', 'Tailwind CSS', 'React'],
        image: B2B,
        link: 'https://dapixel.vercel.app/',
        github: 'https://github.com/ngenoclinton/dapixel'
    }
];
