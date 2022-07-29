import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { AboutPageLayout } from '../../components/layout';

const Sciex = () => {
	return (
		<AboutPageLayout
			title='Sciex'
			link='https://sciex.com'
			subtext='Toronto, Canada | August 2019'
			imagePath='/images/sciex.png'
		>
			<Box>
				<Text>
					I study Computer Science at the University of Waterloo. General things about my
					experience. Courses I take etc...
				</Text>
			</Box>
		</AboutPageLayout>
	);
};

export default Sciex;
