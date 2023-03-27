import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { AboutPageLayout } from '../../components/layout';

const Sciex = () => {
	return (
		<AboutPageLayout
			title='Sciex'
			location='Toronto, Canada'
			date='August 2019'
			imagePath='/images/sciex.png'
		>
			<Stack spacing={8}>
				<Text>
					Sciex sells mass spectrometers which are used in the field for medical research.
					Along with the hardware, Sciex sells the software used to analyze mass
					spectrometry data. I worked with the team that develops new techniques for data
					analysis.
				</Text>
				<Box>
					<Heading size='md'>Automated Labeling</Heading>
					<Text>
						I implemented software which accurately labels data sets with high
						confidence. Previously, professional researchers had to spend valuable
						research time looking at graphs to label these data sets. The data from my
						software is used in the machine learning department to train and evaluate
						models.
					</Text>
				</Box>
			</Stack>
		</AboutPageLayout>
	);
};

export default Sciex;
