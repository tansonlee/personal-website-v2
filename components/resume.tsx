import { Box, Flex, Heading, IconButton, Image, useColorMode } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const Resume = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box id='resume'>
			<Flex align='center'>
				<Heading mr={4}>Resume.</Heading>
				<IconButton
					aria-label='Download resume'
					icon={<DownloadIcon />}
					isRound={true}
					size='sm'
				/>
			</Flex>
			<Image src='/images/resume.png' rounded='lg' boxShadow='lg' w='50vw' m='0 auto' />
		</Box>
	);
};

export default Resume;
