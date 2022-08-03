import { Image, Box, Flex, Heading, Grid, Text, Link, HStack } from '@chakra-ui/react';
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
			<Grid templateColumns='repeat(auto-fit, minmax(300px, 1fr))' gap={8}>
				<FooderProjectCard />
				<Box>
					<Text>More to come...</Text>
				</Box>
			</Grid>
		</Box>
	);
};

const FooderProjectCard = () => {
	return (
		<Card>
			<Box>
				<Heading as='h3' size='lg' textAlign='center'>
					Fooder
				</Heading>
				<Flex justify='center' align='center'>
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
						display={{ base: 'none', sm: 'block', md: 'none', lg: 'none', xl: 'block' }}
					/>
					<Image
						rounded='md'
						src='/images/fooder_3.png'
						h='220px'
						m={2}
						border='1px solid #fff'
						display={{
							base: 'none',
							sm: 'block',
							md: 'none',
							lg: 'block',
							xl: 'block',
						}}
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
						Fooder helps friend groups decide where to eat. Everyone joins a shared room
						on their device, then accepts or declines restaurants. A list of restaurants
						that are unanimously accepted is displayed to the group.
					</Text>
					<Flex>
						<ForwardButton isExternal={true} href='https://fooderweb.netlify.app/'>
							Hosted Project
						</ForwardButton>
						<ForwardButton
							isExternal={true}
							href='https://github.com/tansonlee/fooder-frontend'
						>
							Code
						</ForwardButton>
					</Flex>
				</Box>
			</Box>
		</Card>
	);
};

export default Projects;
