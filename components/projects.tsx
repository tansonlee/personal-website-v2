import { Image, Box, Flex, Heading, Grid, Text, Link } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { ForwardButton } from './buttons';
import { Card } from './card';
import SocialLinkIcon from './socialLinkIcon';

const Projects = () => {
	return (
		<Box id='projects'>
			<Flex mt='64px' align='center'>
				<SocialLinkIcon
					ariaLabel='Github link'
					link='https://github.com/tansonlee'
					icon={<BsGithub />}
					size='md'
				/>
				<Heading>Projects</Heading>
			</Flex>
			<Grid templateColumns='repeat(auto-fit, minmax(200px, 1fr))' gap={8}>
				<FooderProjectCard />
				<FooderProjectCard />
			</Grid>
		</Box>
	);
};

const FooderProjectCard = () => {
	const imagePaths = [
		'/images/fooder_1.png',
		'/images/fooder_2.png',
		'/images/fooder_3.png',
		'/images/fooder_4.png',
	];
	return (
		<Card>
			<Box>
				<Heading as='h3' size='lg' textAlign='center'>
					Fooder
				</Heading>
				<Flex>
					<Image
						rounded='md'
						src='/images/fooder_1.png'
						h='220px'
						m={2}
						border='1px solid #fff'
					/>
					<Image
						rounded='md'
						src='/images/fooder_2.png'
						h='220px'
						m={2}
						border='1px solid #fff'
					/>
					<Image
						rounded='md'
						src='/images/fooder_3.png'
						h='220px'
						m={2}
						border='1px solid #fff'
					/>
					<Image
						rounded='md'
						src='/images/fooder_4.png'
						h='220px'
						m={2}
						border='1px solid #fff'
					/>
				</Flex>

				<Box>
					<Text>
						Fooder helps friend groups decide where to eat. Each person joins the room
						on their device and accepts or declines restaurants. A list of restaurants
						that are unanimously accepted is displayed to the group.
					</Text>
					<Flex justifyContent='space-around'>
						<ForwardButton href='#'>Hosted Project</ForwardButton>
						<ForwardButton href='#'>Code</ForwardButton>
					</Flex>
				</Box>
			</Box>
		</Card>
	);
};

const FooderProjectCard2 = () => {
	return (
		<Box border='1px solid red' textAlign='center' p={4}>
			<Flex justifyContent='space-between'>
				<Image rounded='md' w='48%' mr='2%' src='/images/fooder_1.png' />
				<Image rounded='md' w='48%' ml='2%' src='/images/fooder_2.png' />
			</Flex>
			<Heading size='md'>Fooder</Heading>
			<Flex justifyContent='space-evenly'>
				<Text bgColor='gray' rounded='3xl' px={2} fontSize='sm'>
					Node.js
				</Text>
				<Text bgColor='gray' rounded='3xl' px={2} fontSize='sm'>
					Socket.IO
				</Text>
				<Text bgColor='gray' rounded='3xl' px={2} fontSize='sm'>
					React.js
				</Text>
				<Text bgColor='gray' rounded='3xl' px={2} fontSize='sm'>
					Material UI
				</Text>
			</Flex>
			<Text align='left'>
				Fooder helps friend groups decide where to eat. Each person joins the room on their
				device and accepts or declines restaurants. A list of restaurants that are
				unanimously accepted is displayed to the group.
			</Text>
			<Box textAlign='center'>
				<ForwardButton href='#'>Learn More</ForwardButton>
			</Box>
		</Box>
	);
};

export default Projects;
