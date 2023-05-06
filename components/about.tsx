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
	path: string;
	location?: string;
}

const aboutData: AboutData[] = [
	{
		name: 'University of Waterloo',
		link: 'https://uwaterloo.ca/',
		date: 'Sept 2020 - Apr 2025',
		description:
			"I'm currently in my third year studying computer science at the University of Waterloo. This program is providing me strong fundamentals that I can apply when working in the industry.",
		role: 'Computer Science',
		logo: <Image alt='' position='absolute' src={'/images/waterloo_logo.png'} h={12} />,
		path: '/about/university-of-waterloo',
	},
	{
		name: 'Global Illumination',
		location: 'Manhattan, New York',
		link: 'https://ill.inc/',
		date: 'Jan - Apr 2023',
		description: 'Global Illumination is developing a voxel based game called biomes.',
		logo: (
			<Image alt='' position='absolute' src={'/images/global_illumination_logo.png'} h={14} />
		),
		path: '/about/global-illumination',
	},
	{
		name: 'Paper.xyz',
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
			"Dreamschools is a EdTech startup providing a SASS product for companies providing children's programs.",
		logo: <Image alt='' position='absolute' src={'/images/dreamschools_logo.png'} h={12} />,
		path: '/about/dreamschools',
	},
	{
		name: 'Sciex',
		location: 'Toronto, Ontario',
		link: 'https://sciex.com/',
		date: 'August 2019',
		description:
			'Sciex is a mass spectrometry company providing both hardware and software products.',
		logo: <Image alt='' position='absolute' src={'/images/sciex_logo.png'} mt={1} w={14} />,
		path: '/about/sciex',
	},
];

const About = () => {
	return (
		<Box id='about'>
			<Heading mt='64px'>About Me</Heading>
			Hi, I&apos;m Tanson. I&apos;m a software engineer looking to create impact in all the
			work that I do. My current interests are in game development, web3 and esoteric
			programming languages. Apart from engineering, I enjoy exploring nature along with
			playing sports such as basketball and volleyball.
			<Stack mt={2} spacing={6}>
				{aboutData.map(experience => (
					<AboutMeSection
						key={experience.name}
						name={experience.name}
						location={experience.location}
						link={experience.link}
						description={experience.description}
						role={experience.role}
						icon={experience.logo}
						date={experience.date}
						path={experience.path}
					/>
				))}
			</Stack>
		</Box>
	);
};

const AboutMeSection = ({
	name,
	location,
	link,
	description,
	role,
	icon,
	date,
	path,
}: {
	name: string;
	location?: string;
	link: string;
	description: string;
	role?: string;
	icon: React.ReactNode;
	date: string;
	path: string;
}) => {
	return (
		<Card>
			<>
				{icon}
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

					<ForwardButton href={path}>My Experience</ForwardButton>
				</Box>
			</>
		</Card>
	);
};

export default About;
