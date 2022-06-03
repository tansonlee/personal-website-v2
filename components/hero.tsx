import { Box, Flex, Heading, IconButton, Link, ResponsiveValue, Text } from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { useRouter } from 'next/router';
import SocialLinkIcon from './socialLinkIcon';

const Hero = () => {
	return (
		<Flex id='hero' h='100vh' direction='column' justifyContent='center' alignItems='center'>
			<Heading variant='h1' size='4xl' fontWeight='normal'>
				Tanson Lee
			</Heading>
			<Text variant='h2' fontSize='3xl' fontWeight='light'>
				Software Engineer
			</Text>
			<SocialLinks />

			<ScrollDown />
		</Flex>
	);
};

const SocialLinks = () => {
	return (
		<Flex>
			<SocialLinkIcon
				ariaLabel='Github link'
				link='https://github.com/tansonlee'
				icon={<BsGithub />}
				size='lg'
			/>
			<SocialLinkIcon
				ariaLabel='Linkedin link'
				link='https://www.linkedin.com/in/tansonlee/'
				icon={<BsLinkedin />}
				size='lg'
			/>
			<SocialLinkIcon
				ariaLabel='Email'
				link='mailto:leetanson@gmail.com?subject=Interest From Your Portfolio Website&body=Hi Tanson,'
				icon={<AiOutlineMail />}
				size='lg'
			/>
			<SocialLinkIcon
				ariaLabel='Download resume'
				link='/resume.pdf'
				icon={<CgFileDocument />}
				size='lg'
			/>
		</Flex>
	);
};

const ScrollDown = () => {
	const router = useRouter();

	const handleClick = () => {
		router.push('#about');
	};

	return (
		<Box mt='15vh' cursor='pointer' className='content' onClick={handleClick}>
			<svg id='more-arrows'>
				<polygon
					className='arrow-top'
					points='37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 '
				/>
				<polygon
					className='arrow-middle'
					points='37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 '
				/>
				<polygon
					className='arrow-bottom'
					points='37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 '
				/>
			</svg>
		</Box>
	);
};

export default Hero;
