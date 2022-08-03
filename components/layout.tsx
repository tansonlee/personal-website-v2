import { Box, Heading, Link, Stack, Text, Image, Flex } from '@chakra-ui/react';
import { BackwardButton } from './buttons';
import Footer from './footer';
import Navbar from './navbar';

export const AboutPageLayout = ({
	title,
	link,
	subtext,
	imagePath,
	children,
}: {
	title: string;
	link?: string;
	subtext: string;
	imagePath: string;
	children: JSX.Element;
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
						<Box textAlign='center'>
							<Link href={link} isExternal>
								{link}
							</Link>
							<Text textAlign='center' fontStyle='italic'>
								{subtext}
							</Text>
						</Box>
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
