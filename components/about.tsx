import { Box, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { ForwardButton } from './buttons';
import { Card } from './card';

interface AboutData {
	name: string;
	link: string;
	date: string;
	description: string;
	role?: string;
	logo: React.ReactNode;
	path?: string;
	location?: string;
}

const aboutData: AboutData[] = [
	{
		name: 'University of Waterloo',
		link: 'https://uwaterloo.ca/',
		date: 'Sept 2020 - Apr 2025',
		description:
			'Graduating from Computer Science at the University of Waterloo taking interesting courses such as real-time programming, operating systems, networking, and algorithms.',
		role: 'Computer Science',
		logo: <Image alt='' position='absolute' src={'/images/waterloo_logo.png'} h={12} />,
	},
	{
		name: 'Meta',
		location: 'Menlo Park, California',
		link: 'https://www.meta.com/',
		date: 'Sept - Dec 2024',
		description: 'Worked on Post-impression Ads Infrastructure',
		logo: <Image alt='' position='absolute' src={'/images/meta_logo.png'} h={8} />,
	},
	{
		name: 'Snowflake Computing',
		location: 'San Mateo, California',
		link: 'https://www.snowflake.com/',
		date: 'May - Aug 2024',
		description:
			'Worked on the SQL Workload Optimization team speeding up database clustering allowing for more efficient table scans.',
		logo: <Image alt='' position='absolute' src={'/images/snowflake_logo.png'} h={12} />,
	},
	{
		name: 'Bloomberg',
		location: 'Manhattan, New York',
		link: 'https://www.bloomberg.com/',
		date: 'Sept - Dec 2023',
		description:
			'Worked on the Fast Pricing Infrastructure team building fault tolerance and performance optimizations for a graph execution engine.',
		logo: <Image alt='' position='absolute' src={'/images/bloomberg_logo.jpeg'} h={12} />,
		path: '/about/bloomberg',
	},
	{
		name: 'Global Illumination (acquired by OpenAI)',
		location: 'Manhattan, New York',
		link: 'https://ill.inc/',
		date: 'Jan - Apr 2023',
		description:
			'Global Illumination is developing a multiplayer game called biomes which has the visual style of Minecraft.',
		logo: (
			<Image alt='' position='absolute' src={'/images/global_illumination_logo.png'} h={14} />
		),
		path: '/about/global-illumination',
	},
	{
		name: 'Paper.xyz (acquired by Thirdweb)',
		location: 'San Francisco, California',
		link: 'https://paper.xyz/',
		date: 'May - Aug 2022',
		description:
			'Paper.xyz is a startup focused on creating developer tools to provide friendly web3 experiences.',
		logo: <Image alt='' position='absolute' src={'/images/paper_logo.png'} h={14} ml={2} />,
		path: '/about/paper',
	},
	{
		name: 'Dreamschools',
		location: 'Toronto, Ontario',
		link: 'https://dreamschools.com/',
		date: 'Sept - Dec 2021',
		description:
			"Dreamschools is an EdTech startup providing an all-in-one SASS product for children's daycares and summer camps.",
		logo: <Image alt='' position='absolute' src={'/images/dreamschools_logo.png'} h={12} />,
		path: '/about/dreamschools',
	},
	{
		name: 'Sciex',
		location: 'Toronto, Ontario',
		link: 'https://sciex.com/',
		date: 'August 2019',
		description:
			'Sciex is a mass spectrometry company providing both hardware and software products to analyze chemical compounds.',
		logo: <Image alt='' position='absolute' src={'/images/sciex_logo.png'} mt={1} w={14} />,
		path: '/about/sciex',
	},
];

const About = () => {
	return (
		<Box id='about'>
			<Heading mt='64px'>About Me</Heading>
			👋 I&apos;m Tanson. I&apos;m a software engineer looking to apply my knowledge to
			interesting problems. My current interests are in distributed systems, databases, and
			game development.
			<Stack mt={2} spacing={6}>
				{aboutData.map(experience => (
					<AboutMeSection key={experience.name} experience={experience} />
				))}
			</Stack>
		</Box>
	);
};

const AboutMeSection = ({
	experience: { name, location, link, description, role, logo, date, path },
}: {
	experience: AboutData;
}) => {
	return (
		<Card>
			<>
				{logo}
				<Box ml={16} w='100%' mr={4}>
					<Flex
						justify='space-between'
						flexDir={{
							base: 'column',
							md: 'row',
						}}
						mb={2}
					>
						<Box>
							<Heading size='md'>
								<Link href={link} isExternal colorScheme='blue'>
									{name}
								</Link>
							</Heading>
							{location && <Text fontWeight='bold'>{location}</Text>}
							{role && <Text fontWeight='bold'>{role}</Text>}
						</Box>
						<Text>{date}</Text>
					</Flex>
					<Text>{description}</Text>

					{path && <ForwardButton href={path}>My Experience</ForwardButton>}
				</Box>
			</>
		</Card>
	);
};

export default About;
