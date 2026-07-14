import {
    Cloud,
    Code2,
    Database,
    Layers3,
    type LucideIcon,
    Server,
} from 'lucide-react';

export type NavigationItem = {
    label: string;
    href: string;
};

export type Statistic = {
    value: string;
    label: string;
};

export type SkillGroup = {
    title: string;
    description: string;
    icon: LucideIcon;
    skills: string[];
};

export type Project = {
    title: string;
    subtitle?: string;
    category: string;
    role: string;
    duration: string;
    company?: string;
    teamSize?: string;
    logo?: string;
    description: string;
    highlights?: string[];
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    playStoreUrl?: string;
    featured?: boolean;
};

export type Experience = {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
    logo?: string;
    companyUrl?: string;
    backgroundClass?: string;
};

export type Education = {
    school: string;
    program: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
    logo?: string;
    schoolUrl?: string;
    backgroundClass?: string;
};

export type Review = {
    name: string;
    role: string;
    company: string;
    image: string;
    review: string;
    linkedin?: string;
};

export const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
];

export const statistics: Statistic[] = [
    {
        value: "5+",
        label: "Years of experience",
    },
    {
        value: "2+",
        label: "Years working with AWS",
    },
    {
        value: "10+",
        label: "Projects delivered",
    },
    {
        value: "5",
        label: "Companies worked with",
    },
];

export const skillGroups: SkillGroup[] = [
    {
        title: 'Backend Engineering',
        description:
            'Production-ready APIs, authentication, authorization, and business services.',
        icon: Server,
        skills: [
            'Node.js',
            'Express.js',
            'TypeScript',
            'REST APIs',
            'JWT',
            'RBAC',
            'Socket.io',
        ],
    },
    {
        title: 'Frontend Development',
        description:
            'Responsive interfaces and reusable components for modern applications.',
        icon: Layers3,
        skills: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Vite',
            'HTML5',
            'CSS3',
            'Axios',
        ],
    },
    {
        title: 'Data and Persistence',
        description:
            'Relational and document-oriented models with efficient queries.',
        icon: Database,
        skills: [
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'TypeORM',
            'SQL',
            'Database Design',
        ],
    },
    {
        title: 'Cloud and DevOps',
        description:
            'Containerized services, CI/CD automation, and AWS deployments.',
        icon: Cloud,
        skills: [
            'AWS ECS',
            'AWS ECR',
            'EC2',
            'S3',
            'Docker',
            'GitHub Actions',
            'CloudWatch',
        ],
    },
];

export const projects: Project[] = [
    {
        title: "CourtBridge",
        subtitle: "Sports Venue Booking Platform",
        category: "Full Stack Platform",
        company: "Personal Project",
        role: "Creator and Full Stack Engineer",
        duration: "Jun 2026 — Present",
        teamSize: "Solo Project",
        logo: "/logos/projects/courtbridge.png",
        description:
            "A full stack sports court-booking platform where players can discover available venues and owners can manage courts, schedules, bookings, and revenue.",
        highlights: [
            "Designed dedicated portals for administrators, venue owners, and players.",
            "Built configurable court availability and booking-conflict prevention.",
            "Implemented JWT authentication and role-based access control.",
            "Containerized and deployed the backend using GitHub Actions and AWS ECS.",
        ],
        technologies: [
            "React",
            "Vite",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "TypeORM",
            "Socket.io",
            "Docker",
            "AWS ECS",
        ],
        // githubUrl: "https://github.com/alingasadan",
        liveUrl: "https://courtbridge.dev/",
        featured: true,
    },
    {
        title: "Node Express TypeScript Feature-Based Boilerplate",
        subtitle: "Production-Ready Backend Starter Template",
        category: "Open Source",
        company: "Personal Project",
        role: "Creator & Maintainer",
        duration: "2026 — Present",
        teamSize: "Solo Project",
        logo: "",
        description:
            "A production-ready Node.js, Express, and TypeScript boilerplate following a feature-based architecture. Designed to accelerate backend development with scalable folder organization, authentication, RBAC, Docker, CI/CD, and developer-friendly tooling.",
        highlights: [
            "Feature-based architecture for scalable applications.",
            "JWT authentication and role-based access control (RBAC).",
            "Docker and Docker Compose support for local and production environments.",
            "GitHub Actions CI/CD workflow template.",
            "Centralized error handling, logging, validation, and middleware.",
            "TypeORM integration with PostgreSQL.",
            "Environment configuration and production-ready project structure.",
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "TypeORM",
            "PostgreSQL",
            "Docker",
            "GitHub Actions",
            "JWT",
            "RBAC",
            "Redis",
        ],
        githubUrl:
            "https://github.com/nadnad121021/node-express-ts-feature-based-boilerplate",
    },
    {
        title: "Personal Portfolio",
        subtitle: "Developer Portfolio Website",
        category: "Personal Project",
        company: "Personal Project",
        role: "Designer & Full Stack Developer",
        duration: "2026 — Present",
        teamSize: "Solo Project",
        featured: false,

        logo: "",

        description:
            "A modern and responsive portfolio website built to showcase my experience, projects, technical skills, and recommendations. Designed with a clean interface and smooth navigation to provide recruiters and potential clients with an overview of my work and engineering background.",

        highlights: [
            "Designed and developed the entire website from scratch.",
            "Responsive design optimized for desktop, tablet, and mobile devices.",
            "Showcases professional experience, featured projects, technical skills, education, and recommendations.",
            "Modern UI with reusable React components and smooth scrolling navigation.",
            "Built with performance, accessibility, and maintainability in mind."
        ],

        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "React Icons",
            "Lucide React",
        ],

        githubUrl: "https://github.com/nadnad121021/portfolio",
        liveUrl: "https://danilo-alingasa.web.app",
    },
    {
        title: "Safety Mojo",
        subtitle: "Construction Safety Management Platform",
        category: "Professional Project",
        company: "Safety Mojo",
        role: "Backend Developer | Node.js Developer",
        duration: "2023 — 2025",
        teamSize: "Cross-functional Team",
        logo: "/logos/projects/safety-mojo-mob.png",
        description:
            "A safety management platform designed for frontline teams to simplify daily safety operations, improve communication, and promote a stronger safety culture.",
        highlights: [
            "Developed backend services and REST APIs for safety-management workflows.",
            "Built features for submissions, corrective actions, training records, and reminders.",
            "Implemented PostgreSQL and TypeORM queries for operational reporting.",
            "Supported Dockerized deployment pipelines using GitHub Actions, ECR, and AWS ECS.",
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "PostgreSQL",
            "TypeORM",
            "Docker",
            "AWS ECS",
            "AWS ECR",
            "GitHub Actions",
        ],
        liveUrl: "https://safetymojo.ai/",
        playStoreUrl:
            "https://play.google.com/store/apps/details?id=ai.edify.rome",
    },
    {
        title: "Lear Clinic System",
        subtitle: "Employee Clinic and Medical Slip Management",
        category: "Internal Enterprise System",
        company: "Lear Corporation",
        role: "Full Stack Developer",
        duration: "2018 — 2019",
        teamSize: "Internal Development Team",
        logo: "/logos/projects/lear-login-sm.png",
        description:
            "An internal clinic system designed to track employee OPD balances and issued medical slips. It also monitors purchase-request amounts, usage, and remaining vendor balances for Lear Clinic operations.",
        highlights: [
            "Built employee OPD balance and medical-slip tracking features.",
            "Implemented vendor purchase-request monitoring and balance calculations.",
            "Developed internal reports for clinic and administrative users.",
        ],
        technologies: [".NET", "MS SQL Server", "jQuery", "IIS"],
    },
    {
        title: "Lear Employee Certification System",
        subtitle: "Employee Skills Matrix and Certification Tracking",
        category: "Internal Enterprise System",
        company: "Lear Corporation",
        role: "Full Stack Developer",
        duration: "2018 — 2019",
        teamSize: "Internal Development Team",
        logo: "/logos/projects/lear-login-sm.png",
        description:
            "A skills-matrix application developed for Lear Corporation to track employee certifications, including initial certification, expiration, and recertification requirements.",
        highlights: [
            "Built certification and recertification tracking workflows.",
            "Developed employee skills-matrix views for operational teams.",
            "Implemented reporting and status monitoring for certification records.",
        ],
        technologies: [
            ".NET",
            "MS SQL Server",
            "jQuery",
            "IIS",
            "Bootstrap",
        ],
    },
    {
        title: "Task King System",
        subtitle: "Scholar Task Scheduling and Automation",
        category: "Task Automation System",
        company: "Academic and Community Project",
        role: "Backend Developer",
        duration: "2018 — 2019",
        teamSize: "Small Development Team",
        logo: "/logos/projects/task-king-sm.png",
        description:
            "A task-automation system created to manage recurring responsibilities among scholar students, including dishwashing, dining-hall duties, gardening, and other shared chores.",
        highlights: [
            "Automated task assignment using predefined rules and rotation cycles.",
            "Helped ensure fair and consistent distribution of responsibilities.",
            "Built backend logic for scheduling, availability, and recurring assignments.",
        ],
        technologies: ["Node.js", "MySQL", "JavaScript", "jQuery"],
        githubUrl: "https://github.com/nadnad121021/TaskKing"
    },
    {
        title: "DCISM Web-Based Resource Management System",
        subtitle: "Inventory, Borrowing, and Reservation Platform",
        category: "Capstone Project",
        company: "DCISM",
        role: "Lead Developer",
        duration: "2018 — 2019",
        teamSize: "Capstone Team",
        logo: "/logos/projects/dcism-sm.png",
        description:
            "A web-based resource-management system featuring inventory tracking, item borrowing, reservations, and SMS notifications.",
        highlights: [
            "Led the planning and development of the capstone system.",
            "Built inventory, borrowing, return, and reservation workflows.",
            "Integrated SMS notifications for transaction updates and reminders.",
        ],
        technologies: [
            ".NET",
            "MS SQL Server",
            "jQuery",
            "Bootstrap",
            "SMS Integration",
        ],
        githubUrl: "https://github.com/nadnad121021/DCISM_WBRMSystem"
    },
];

export const experiences: Experience[] = [
    {
        role: "Backend Developer (Contract)",
        company: "MUVR Technologies, Inc.",
        period: "December 2025 — April 2026",
        location: "Remote",
        description:
            "Worked as a Backend Developer responsible for developing and maintaining backend services, REST APIs, and system integrations using Node.js, JavaScript, Sequelize, and PostgreSQL. Quickly adapted to an existing codebase, restored the real-time chat feature integrated with GetStream, and contributed to product improvements through API enhancements, bug fixes, and Agile collaboration.",

        achievements: [
            "Quickly became productive on an unfamiliar codebase without a formal onboarding process.",
            "Investigated and restored the non-functional real-time chat feature integrated with GetStream.",
            "Developed and maintained backend services and REST APIs using Node.js and Sequelize.",
            "Implemented API enhancements and resolved production issues to improve application reliability.",
            "Collaborated closely with mobile developers and participated in Agile sprints to deliver new features and bug fixes.",
        ],

        technologies: [
            "Node.js",
            "JavaScript",
            "Sequelize",
            "PostgreSQL",
            "GetStream",
            "REST APIs",
            "Agile",
        ],

        logo: "/logos/experience/muvr.svg",
        companyUrl: "https://www.muvr.io/",
        backgroundClass: "bg-purple-500",
    },
    {
        role: "Software Engineer (Contract)",
        company: "Mojo AI",
        period: "December 2023 — July 2025",
        location: "Remote",
        description:
            "Built and maintained scalable backend services using Node.js, TypeScript, Express.js, TypeORM, and PostgreSQL. Managed end-to-end deployment workflows through Git-based CI/CD pipelines, Docker, AWS ECS, and ECR.",
        achievements: [
            "Designed and optimized REST APIs using Node.js, Express.js, and TypeScript.",
            "Implemented CI/CD pipelines using GitHub Actions, AWS ECR, and AWS ECS.",
            "Managed PostgreSQL databases with a focus on data integrity and query efficiency.",
            "Conducted peer code reviews to improve maintainability and reduce post-deployment issues.",
            "Collaborated in Agile sprints to deliver high-priority backend features on schedule.",
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "TypeORM",
            "PostgreSQL",
            "Docker",
            "AWS ECS",
            "AWS ECR",
            "GitHub Actions",
        ],
        logo: "/logos/experience/mojo-ai.svg",
        companyUrl: "https://getmojo.ai/",
    },
    {
        role: "Node.js Developer",
        company: "SmartStart, a Dia & Gerona Ventures LLC Company",
        period: "June 2022 — December 2023",
        location: "Remote",
        description:
            "Developed REST APIs using Node.js and Express and integrated them with React frontend components to support reliable client-server communication.",
        achievements: [
            "Refactored and migrated an existing JavaScript codebase to TypeScript.",
            "Managed and maintained MongoDB databases, improving queries and data consistency.",
            "Collaborated with cross-functional teams to integrate new API endpoints.",
            "Improved backend maintainability and system reliability through ongoing refactoring.",
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "MongoDB",
            "React",
            "REST APIs",
        ],
        logo: "/logos/experience/smartstart.jpeg",
        companyUrl: "https://smartstart.us/",
    },
    {
        role: "Software Engineer",
        company: "DNA Micro Software Inc.",
        period: "October 2020 — June 2022",
        location: "Cebu,City, Philippines",
        description:
            "Worked in a semi-full-stack role with a primary focus on backend development using Node.js and Express. Collaborated closely with React developers by implementing integration logic and ensuring reliable data flow between frontend and backend systems.",
        achievements: [
            "Developed services using a microservice-based architecture to improve modularity and maintainability.",
            "Built and maintained backend APIs using Node.js and Express.",
            "Integrated React frontend components with backend services.",
            "Collaborated with frontend engineers to resolve integration and data-flow issues.",
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "JavaScript",
            "React",
            "Microservices",
            "REST APIs",
        ],
        logo: "/logos/experience/dna.jpeg",
        companyUrl: "https://www.dnamicro.com/",
    },
    {
        role: "Application Developer Intern",
        company: "Lear Corporation",
        period: "July 2019 — April 2020",
        location: "Lapu-Lapu,City, Philippines",
        description:
            "Developed internal applications using the .NET Framework and Microsoft SQL Server to replace manual paperwork and improve operational efficiency.",
        achievements: [
            "Developed internal web applications using .NET and Microsoft SQL Server.",
            "Automated reporting and administrative workflows previously handled through spreadsheets.",
            "Migrated manual Excel-based processes into web applications.",
            "Improved data accuracy, accessibility, and consistency across internal teams.",
        ],
        technologies: [
            ".NET Framework",
            "C#",
            "MS SQL Server",
            "jQuery",
            "Bootstrap",
            "IIS",
        ],
        logo: "/logos/experience/lear.png",
        companyUrl: "https://www.lear.com/",
    },
];

export const engineeringFocus = [
    "Building web applications from idea to deployment",
    "Creating reliable backend services",
    "Designing clean and maintainable software",
    "Improving user experience through thoughtful development",
    "Learning new technologies and best practices",
    "Working closely with designers, developers, and stakeholders",
];

export const education: Education[] = [
    {
        program: 'Certificate in Computer Technology',
        school: 'University of San Carlos - Cebu',
        location: 'Talamban, Cebu City, Philippines',
        period: '2017 - 2020',
        description: 'Major in Software Development',
        logo: "/logos/education/usc_logo.svg",
        highlights: [
            'I’ve studied core programming languages like C# and Java as part of my software development foundation.',
            'I’ve also learned essential web technologies including HTML, CSS, JavaScript, and Node.js.',
            'On the database side, I’ve worked with both SQL and NoSQL systems like MySQL and MongoDB.'
        ]
    }
];

export const reviews: Review[] = [
    {
        name: "James Carlo Rosales",
        role: "Flutter Developer | Mobile Developer",
        company: "MUVR Technologies, Inc.",
        image: "/logos/reviews/james.png",
        linkedin: "https://www.linkedin.com/in/james-carlo-rosales-a691633a1",
        review:
            "I worked closely with Dan for five months, and he has been an excellent colleague throughout. As a backend developer, he was approachable, professional, and easy to collaborate with. I truly enjoyed working with him and would confidently recommend him to any software engineering team."
    },
    {
        name: "Michael Albano",
        role: "Flutter Developer | Mobile Developer",
        company: "Mojo AI",
        image: "/logos/reviews/michael.jpeg",
        linkedin: "https://www.linkedin.com/in/michael-albano-23a0888a",
        review:
            "I worked with Dan for over three years. He consistently delivered the backend requirements of our projects and was always responsive, collaborative, and open to feedback. I highly recommend him for any backend development role."
    },
    {
        name: "John Regy Ebarita",
        role: "Software Developer",
        company: "Mojo AI",
        image: "/logos/reviews/john.jpeg",
        linkedin: "https://www.linkedin.com/in/johnebarita",
        review:
            "I've had the pleasure of working with Dan for more than three years. His strong work ethic, professionalism, and technical expertise consistently stood out. He delivers high-quality solutions, collaborates effectively with the team, and is always willing to help others succeed."
    },
    {
        name: "Jane Repollo",
        role: "Software Engineer",
        company: "DNA Micro Software Inc.",
        image: "/logos/reviews/jane.jpg",
        linkedin: "https://www.linkedin.com/in/jane-repollo-30b744195",
        review:
            "During our time working together, I developed a deep appreciation for Dan's technical expertise. Beyond his engineering skills, his patience, professionalism, and positive attitude made him an outstanding teammate."
    },
    {
        name: "Cris Laurence Lorejas",
        role: "Software Engineer",
        company: "SmartStart, a Dia & Gerona Ventures LLC Company",
        image: "/logos/reviews/cris.jpeg",
        linkedin: "https://www.linkedin.com/in/cris-laurence-lorejas-694948213",
        review:
            "Dan and I worked together for over a year on backend services and database development. He's highly skilled, adaptable, communicates clearly, and consistently delivers on time. His ability to explain complex ideas with clear diagrams and clean, maintainable code makes collaboration smooth and productive."
    }
];

export { Code2 };