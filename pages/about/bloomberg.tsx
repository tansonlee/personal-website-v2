import { Stack, Text, Box, OrderedList, ListItem, Heading } from '@chakra-ui/react';
import { AboutPageLayout } from '../../components/layout';

const GlobalIllumination = () => {
	return (
		<AboutPageLayout
			title='Bloomberg'
			location='Manhattan, New York'
			date='Sept - Dec 2023'
			imagePath='/images/bloomberg.JPG'
		>
			<Text>
				At Bloomberg, I worked on the Fast Pricing Infrastructure team. Our team builds the
				infrastructure layer for performing pricing and risk analytics on potentially
				massive portfolios. I learned a lot about software architecture design and
				distributed systems throughout the term.
			</Text>
			<Text>
				I worked primarily in C++ using technologies such as gRPC, Kubernetes, and
				Cassandra.
			</Text>
		</AboutPageLayout>
	);
};

export default GlobalIllumination;
