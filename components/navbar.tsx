import { Box, Button, DarkMode, Flex, LightMode, Link, Text, useColorMode } from '@chakra-ui/react';
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
			bg={
				colorMode === 'light'
					? 'backgroundColor.lightTranslucent'
					: 'backgroundColor.darkTranslucent'
			}
		>
			<Link href='#hero'>TANSON</Link>
			<Flex alignItems='center' justifyContent='space-between' minW='40vw'>
				<Link href='#about'>About</Link>
				<Link href='#projects'>Projects</Link>
				<Link href='#contact'>Contact</Link>
				<Button onClick={toggleColorMode}>
					{colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
				</Button>
			</Flex>
		</Flex>
	);
};

export default Navbar;
