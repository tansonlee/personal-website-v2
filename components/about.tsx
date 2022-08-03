import { Box, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { ForwardButton } from './buttons';
import { Card } from './card';

const aboutData = [
	{
		name: 'University of Waterloo',
		link: 'https://uwaterloo.ca/',
		date: '2020 - 2025',
		description:
			"I'm currently in my third year studying computer science at the University of Waterloo. This program is providing me strong fundamentals that I can apply when working in the industry.",
		role: 'Computer Science',
		logo: <Image position='absolute' src={'/images/waterloo_logo.png'} h={12} />,
		path: '/about/university-of-waterloo',
	},
	{
		name: 'Paper.xyz',
		link: 'https://paper.xyz/',
		date: 'May - Aug 2022',
		description:
			'Paper.xyz is a web3 startup primarily focused on developer tools to provide a frictionless checkout experience for NFTs.',
		role: 'Software Engineer',
		logo: <Image position='absolute' src={'/images/paper_logo.png'} h={14} ml={2} />,
		path: '/about/paper',
	},
	{
		name: 'Dreamschools',
		link: 'https://dreamschools.com/',
		date: 'Sept - Dec 2021',
		description:
			'Dreamschools is a EdTech startup providing a SASS product for companies providing childrens programs.',
		role: 'Software Engineer',
		logo: <Image position='absolute' src={'/images/dreamschools_logo.png'} h={12} />,
		path: '/about/dreamschools',
	},
	{
		name: 'Sciex',
		link: 'https://sciex.com/',
		date: 'August 2019',
		description: 'Sciex is a mass spectrometry company providing both hardware and software.',
		role: 'Software Engineer',
		logo: <Image position='absolute' src={'/images/sciex_logo.png'} mt={1} w={14} />,
		path: '/about/sciex',
	},
];

const About = () => {
	return (
		<Box id='about'>
			<Heading mt='64px'>About Me</Heading>
			Hi, I&apos;m Tanson. I&apos;m a software engineer looking to create impact in all the
			work that I do. My current interests are in web3 and esoteric programming languages.
			Apart from engineering, I enjoy exporing nature along with playing sports such as
			basketball and volleyball.
			<Stack mt={2} spacing={6}>
				{aboutData.map(experience => (
					<AboutMeSection
						name={experience.name}
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
	link,
	description,
	role,
	icon,
	date,
	path,
}: {
	name: string;
	link: string;
	description: string;
	role: string;
	icon: JSX.Element;
	date: string;
	path: string;
}) => {
	return (
		<Card>
			<>
				{icon}
				<Box ml={16} w='100%' mr={4}>
					<Flex justify='space-between'>
						<Box>
							<Heading size='md'>
								<Link href={link} isExternal colorScheme='blue'>
									{name}
								</Link>
							</Heading>
							<Text variant='subtle' mb={2}>
								{role}
							</Text>
						</Box>
						<Text>{date}</Text>
					</Flex>
					<Text>{description}</Text>

					<ForwardButton href={path}>Learn More</ForwardButton>
				</Box>
			</>
		</Card>
	);
};

export default About;
