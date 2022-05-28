import { Box, Flex, Spacer, Stack } from '@chakra-ui/react';
import About from '../components/about';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import Resume from '../components/resume';

const Home = () => {
	return (
		<Box>
			<Navbar />
			<Stack maxW='80vw' margin='0 auto'>
				<Hero />
				<About />
				<Projects />
				<Resume />
				<Contact />
			</Stack>
		</Box>
	);
};

export default Home;
