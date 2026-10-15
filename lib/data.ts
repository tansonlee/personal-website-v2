export interface Link {
	label: string;
	href: string;
}

// A row in experience or education. Clicking it expands `details`.
export interface Entry {
	name: string;
	logo: string;
	// Swapped in on the light theme when `logo` doesn't show up on a light background
	lightLogo?: string;
	description: string;
	date: string;
	details: string[];
	current?: boolean;
	intern?: boolean;
}

export interface Project {
	name: string;
	description: string;
	links: Link[];
}

export const profile = {
	name: 'Tanson Lee',
	bio: 'Software engineer at Citadel in New York City.',
};

export const links: Link[] = [
	{ label: 'github', href: 'https://github.com/tansonlee' },
	{ label: 'linkedin', href: 'https://www.linkedin.com/in/tansonlee/' },
	{ label: 'email', href: 'mailto:leetanson@gmail.com' },
	{ label: 'resume', href: '/resume.pdf' },
];

export const experience: Entry[] = [
	{
		name: 'Citadel',
		logo: '/images/citadel_logo_on_dark.png',
		lightLogo: '/images/citadel_logo_on_light.png',
		description: 'Research Engineering, Equity Quantitative Research',
		date: 'jul 2025–now',
		current: true,
		details: ['Building the compute and storage layer for research.'],
	},
	{
		name: 'Meta',
		logo: '/images/meta_logo.png',
		description: 'Post-impressions Ads Infrastructure',
		date: 'fall 2024',
		intern: true,
		details: [
			'Reliability platform that auto-generates E2E tests for revenue-critical ad events from production traces: 117 events and 9,761 tests protecting $100M+ in annual revenue.',
			'Config-driven pipeline that alerts on data corruption, ingesting 75TB/day, with optimizations that cut its storage by 99.5%.',
			'Monitoring and alerting for the core ad impressions service (170B+ daily events), reducing on-call load by 6 hours a week.',
			'Proposed and landed a retry mechanism in the ad impression cache for fault tolerance against upstream outages, projected to save $11.8M per half.',
		],
	},
	{
		name: 'Snowflake',
		logo: '/images/snowflake_logo.png',
		description: 'SQL Workload Optimization',
		date: 'summer 2024',
		intern: true,
		details: [
			'Parallelized query plans for database clustering on 6.84% of tables: ~35% faster clustering and ~25% faster table scans.',
			'Reworked clustering file selection by consolidating clustering stages, cutting table scan costs ~30% for insert-heavy tables.',
		],
	},
	{
		name: 'Bloomberg',
		logo: '/images/bloomberg_logo.jpeg',
		description: 'Fast Pricing Infrastructure',
		date: 'fall 2023',
		intern: true,
		details: [
			'Distributed caching microservice handling 30,000+ writes/sec for asset pricing, reducing pricing errors by 95%.',
			'Data-sharing system over gRPC that runs pricing calculations in parallel across servers, a 300% speedup.',
		],
	},
	{
		name: 'Global Illumination',
		logo: '/images/global_illumination_logo.png',
		lightLogo: '/images/global_illumination_logo_on_light.png',
		description: '(Acq. by OpenAI) web-based multiplayer voxel game',
		date: 'winter 2023',
		intern: true,
		details: [
			'Worked on Biomes, a web-based, massively multiplayer voxel game.',
			'Extended the in-house physics engine with swimming, climbing, ladders, and ice.',
			'Realistic water reflections written as high-performance OpenGL shaders.',
			'Redesigned the NPC AI service around 3D Newtonian physics, adding fish and birds to the world.',
		],
	},
	{
		name: 'Paper',
		logo: '/images/paper_logo.png',
		description: '(Acq. by Thirdweb) Payments infrastructure for Web3',
		date: 'summer 2022',
		intern: true,
		details: [
			'One of four engineers building credit-card checkout for NFTs.',
			'Re-architected authentication around role-based access control, used by 85%+ of customers.',
			'Auction system with Redis-cached chain reads (~2s → <100ms) and job queues for writes.',
			'Localization infrastructure and French support for European customers.',
		],
	},
	{
		name: 'Dreamschools',
		logo: '/images/dreamschools_logo.png',
		description: 'EdTech SaaS for daycares and camps',
		date: 'fall 2021',
		intern: true,
		details: [
			'Checkout features: subscriptions, gift cards, refunds, coupons, taxes, and receipts.',
			'Restructured data storage, cutting some page loads from 15s to under 500ms.',
			'Onboarded two full-time developers and owned code review and deployments.',
		],
	},
];

export const education: Entry = {
	name: 'Waterloo',
	logo: '/images/waterloo_logo.png',
	description: 'BCS, Computer Science',
	date: '2025',
	details: [
		'Major GPA 3.98 / 4.0.',
		'Coursework in real-time programming, operating systems, networking, distributed systems, algorithms, and AI.',
	],
};

export const projects: Project[] = [
	{
		name: 'Echo Cache',
		description: 'Distributed, in-memory cache built for performance.',
		links: [{ label: 'github', href: 'https://github.com/tansonlee/echo-cache' }],
	},
	{
		name: 'Ray Tracer',
		description: 'Multi-threaded ray tracer: metal, glass, and matte.',
		links: [{ label: 'github', href: 'https://github.com/tansonlee/ray-tracer' }],
	},
	{
		name: 'Rusty Racket',
		description: 'Racket interpreter in Rust: tokenizer, parser, evaluator.',
		links: [{ label: 'github', href: 'https://github.com/tansonlee/rusty-racket' }],
	},
	{
		name: 'PyScript',
		description: 'Scripting language with a compiler, assembler, and VM.',
		links: [
			{ label: 'github', href: 'https://github.com/tansonlee/PyScript' },
			{ label: 'demo', href: 'https://replit.com/@TansonL/PyScript#program.ps' },
		],
	},
];
