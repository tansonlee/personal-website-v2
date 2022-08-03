import { Button, Flex, HStack, Link, useColorMode, Image } from '@chakra-ui/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex
			justifyContent='space-between'
			py={3}
			px={6}
			pos='sticky'
			top='0'
			zIndex='999'
			alignItems='center'
			bg={colorMode === 'light' ? '#ffffffee' : '#11151cee'}
		>
			<Link href='/#hero'>
				<Image
					src={colorMode === 'light' ? '/logo_light.svg' : '/logo_dark.svg'}
					w={8}
					h={8}
					alt='home'
				/>
			</Link>
			<HStack spacing={14} alignItems='center' justifyContent='space-between'>
				<Link href='/#about'>About</Link>
				<Link href='/#projects'>Projects</Link>
				<Link href='/#contact'>Contact</Link>
				<Button onClick={toggleColorMode}>
					{colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
				</Button>
			</HStack>
		</Flex>
	);
};

export default Navbar;
