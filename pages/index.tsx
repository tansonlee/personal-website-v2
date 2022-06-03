import { Box, Flex, Spacer, Stack } from '@chakra-ui/react';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Projects from '../components/projects';

const Home = () => {
	return (
		<Box>
			<Navbar />
			<Stack maxW='70vw' margin='0 auto'>
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</Stack>
		</Box>
	);
};

export default Home;
