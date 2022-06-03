import { Image, Box, Flex, Heading, Grid, Text } from '@chakra-ui/react';
import LearnMoreButton from './learnMoreButton';

const Projects = () => {
	return (
		<Box id='projects'>
			<Heading mt='64px'>projects</Heading>
			<Grid
				templateColumns={{
					base: '1fr',
					md: '1fr 1fr 1fr',
				}}
				gap={3}
			>
				<FooderProjectCard />
				<FooderProjectCard />
				<FooderProjectCard />
			</Grid>
		</Box>
	);
};

const FooderProjectCard = () => {
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
				unanimously accepted is displayed to the group
			</Text>
			<Box textAlign='center'>
				<LearnMoreButton />
			</Box>
		</Box>
	);
};

export default Projects;
