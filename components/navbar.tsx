import {
	Text,
	Button,
	Flex,
	HStack,
	Link,
	useColorMode,
	Image,
	useBreakpointValue,
	IconButton,
	Drawer,
	useDisclosure,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	VStack,
	Collapse,
	CloseButton,
	Box,
	Heading,
	useColorModeValue,
} from '@chakra-ui/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { useRef, useState } from 'react';
import SocialLinkIcon from './socialLinkIcon';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { useRouter } from 'next/router';

const Navbar = () => {
	const isDesktop = useBreakpointValue({ base: false, md: true });

	return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

const MobileNavbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

	const hamburgerColor = useColorModeValue('#000', '#fff');
	const bgColor = useColorModeValue('#dde3e8', '#1e2026fa');

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

			<Box zIndex={100} onClick={onToggle}>
				<Box
					className='hamburger-line'
					bgColor={hamburgerColor}
					borderRadius='md'
					transform={isOpen ? 'rotate(-45deg) translate(-10px, 2px)' : 'none'}
				></Box>
				<Box
					className='hamburger-line'
					bgColor={hamburgerColor}
					borderRadius='md'
					opacity={isOpen ? 0 : 1}
				></Box>
				<Box
					className='hamburger-line'
					bgColor={hamburgerColor}
					borderRadius='md'
					transform={isOpen ? 'rotate(45deg) translate(-10px, -2px)' : 'none'}
				></Box>
			</Box>
			<Flex
				className={isOpen ? 'mobile-nav-wrapper open' : 'mobile-nav-wrapper'}
				position='fixed'
				top={0}
				left={0}
				w='100vw'
				h='100vh'
				bgColor={bgColor}
				flexDir='column'
				justifyContent='space-between'
				p={6}
			>
				<Box>
					<Heading textAlign='center' size='2xl' mb={6}>
						Tanson Lee
					</Heading>
					<VStack>
						<Link fontSize='2xl' href='/#hero' onClick={onClose}>
							Home
						</Link>
						<Link fontSize='2xl' href='/#about' onClick={onClose}>
							About
						</Link>
						<Link fontSize='2xl' href='/#projects' onClick={onClose}>
							Projects
						</Link>
						<Link fontSize='2xl' href='/#contact' onClick={onClose}>
							Contact
						</Link>
					</VStack>
				</Box>
				<Flex align='center' justify='center'>
					<SocialLinkIcon
						ariaLabel='Github link'
						link='https://github.com/tansonlee'
						icon={<BsGithub />}
						size='sm'
					/>
					<SocialLinkIcon
						ariaLabel='Linkedin link'
						link='https://www.linkedin.com/in/tansonlee/'
						icon={<BsLinkedin />}
						size='sm'
					/>
					<SocialLinkIcon
						ariaLabel='Email'
						link='mailto:leetanson@gmail.com?subject=Interest From Your Portfolio Website&body=Hi Tanson,'
						icon={<AiOutlineMail />}
						size='sm'
					/>
					<SocialLinkIcon
						ariaLabel='Download resume'
						link='/resume.pdf'
						icon={<CgFileDocument />}
						size='sm'
					/>
					<Button ml={2} size='sm' onClick={toggleColorMode}>
						{colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

const DesktopNavbar = () => {
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
