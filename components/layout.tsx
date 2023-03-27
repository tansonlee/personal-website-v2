import { Box, Heading, Link, Stack, Text, Image, Flex } from '@chakra-ui/react';
import { BackwardButton } from './buttons';
import Footer from './footer';
import Navbar from './navbar';

export const AboutPageLayout = ({
	title,
	location,
	date,
	imagePath,
	children,
}: {
	title: string;
	location: string;
	date: string;
	imagePath: string;
	children: React.ReactNode;
}) => (
	<Box mb={20}>
		<Navbar />
		<Box ml={4}>
			<BackwardButton href='/#about'>Back</BackwardButton>
		</Box>
		<Box maxW='1700px' margin='0 auto' w={{ base: '90vw', sm: '75vw' }}>
			<Box>
				<Stack spacing={8}>
					<Stack align='center'>
						<Heading textAlign='center'>{title}</Heading>
						<Text textAlign='center'>{location}</Text>
						<Text textAlign='center' fontStyle='italic'>
							{date}
						</Text>
					</Stack>
					<Flex justify='center'>
						<Image
							borderRadius='lg'
							src={imagePath}
							shadow='2xl'
							w={{
								base: '100%',
								lg: '80%',
							}}
							alt=''
						/>
					</Flex>

					<Box fontSize='md'>{children}</Box>
				</Stack>
			</Box>
		</Box>
		<Footer />
	</Box>
);
