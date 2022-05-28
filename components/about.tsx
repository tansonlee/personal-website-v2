import { Box, Flex, Heading, Icon, Image, Link, Text } from '@chakra-ui/react';
import { IoMdSchool } from 'react-icons/io';

const About = () => {
	return (
		<Box id='about'>
			<Heading mt='100px'>About Me.</Heading>
			<Box borderLeft='4px' borderColor='accent.100' borderRadius={3} p={0} pl={4} mt={2}>
				<Text my={3}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum
					perferendis. Iusto expedita porro illum, perferendis blanditiis sunt suscipit
				</Text>
				{/* University of Waterloo */}
				<AboutMeSection
					name='University of Waterloo'
					link='https://uwaterloo.ca/'
					description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum molestiae iusto repudiandae tenetur odio nam in suscipit beatae, fugit autem.'
					icon={<Icon mr={2} as={IoMdSchool} w={5} h={5} />}
				/>

				{/* Paper.xyz */}
				<AboutMeSection
					name='Paper.xyz'
					link='https://paper.xyz/'
					description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum molestiae iusto repudiandae tenetur odio nam in suscipit beatae, fugit autem.'
					icon={<Image src='/images/paper_logo.png' h={6} mr={2} />}
				/>

				{/* Dreamschools */}
				<AboutMeSection
					name='Dreamschools'
					link='https://dreamschools.com/'
					description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum molestiae iusto repudiandae tenetur odio nam in suscipit beatae, fugit autem.'
					icon={<Image src='/images/dreamschools_logo.png' h={5} mr={2} />}
				/>
			</Box>
		</Box>
	);
};

const AboutMeSection = ({
	name,
	link,
	description,
	icon,
}: {
	name: string;
	link: string;
	description: string;
	icon: any;
}) => {
	return (
		<Box my={3} mt={6} alignItems='center'>
			<Flex alignItems='center'>
				{icon}
				<Heading size='md'>
					<Link href={link} isExternal>
						{name}
					</Link>
				</Heading>
			</Flex>
			<Text>{description}</Text>
		</Box>
	);
};

export default About;
