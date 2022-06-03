import { Box, Button, Flex, Heading, Icon, Image, Link, Text } from '@chakra-ui/react';
import { IoMdSchool } from 'react-icons/io';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import LearnMoreButton from './learnMoreButton';

const About = () => {
	return (
		<Box id='about'>
			<Heading mt='64px'>about me</Heading>
			Hi, I&apos;m Tanson. I&apos;m a software engineer looking to create impact in all the
			work that I do. I always want to learn from work or school or projects. My current
			interests are in web3 and esoteric programming languages. Apart from engineering, I
			enjoy exporing nature along with playing sports such as vollleyball and basketball.
			<Box mt={2}>
				{/* University of Waterloo */}
				<AboutMeSection
					name='University of Waterloo'
					link='https://uwaterloo.ca/'
					description="I'm currently in my third year studying computer science at the University of Waterloo. This program is providing me strong fundamentals that I can apply when working in the industry."
					role='Computer Science'
					icon={<Image position='absolute' src='/images/waterloo_logo.png' h={12} />}
				/>

				{/* Paper.xyz */}
				<AboutMeSection
					name='Paper.xyz'
					link='https://paper.xyz/'
					description='Paper.xyz is a web3 startup primarily focused on developer tools to provide a frictionless checkout experience for utility-based NFTs.'
					role='Software Engineer'
					icon={
						<Image left={3} position='absolute' src='/images/paper_logo.png' h={12} />
					}
				/>

				{/* Dreamschools */}
				<AboutMeSection
					name='Dreamschools'
					link='https://dreamschools.com/'
					description='Dreamschools is a EdTech startup providing a SASS product for childrens program providers to better manage their businesses.'
					role='Software Engineer'
					icon={<Image position='absolute' src='/images/dreamschools_logo.png' h={12} />}
				/>
			</Box>
		</Box>
	);
};

const AboutMeSection = ({
	name,
	link,
	description,
	role,
	icon,
}: {
	name: string;
	link: string;
	description: string;
	role: string;
	icon: any;
}) => {
	return (
		<Flex position='relative' my={7} mt={6}>
			{icon}
			<Box
				position='absolute'
				top={14}
				left={6}
				h='calc(100% - 2.5rem)'
				w='2px'
				bgColor='gray'
			></Box>
			<Box ml={14}>
				<Heading size='md'>
					<Link href={link} isExternal colorScheme='blue'>
						{name}
					</Link>
				</Heading>
				<Text variant='subtle' mb={2}>
					{role}
				</Text>
				<Text>{description}</Text>
				<LearnMoreButton />
			</Box>
		</Flex>
	);
};

export default About;
