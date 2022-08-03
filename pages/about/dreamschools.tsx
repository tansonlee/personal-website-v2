import { Box, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { AboutPageLayout } from '../../components/layout';

const Dreamschools = () => {
	return (
		<AboutPageLayout
			title='Dreamschools'
			link='https://dreamschools.com'
			subtext='Toronto, Canada | Sept - Dec 2021'
			imagePath='/images/dreamschools.png'
		>
			<Stack spacing={8}>
				<Text>
					I was a software engineer at Dreamschools working on the full stack application
					aiming to make childrens&lsquo; programs more accessible to parents.
					Dreamschools is an application which allows companies to manage payments,
					finances, attendance, and more for their programs. It also allows parents to
					enroll, pay, and manage their childrens&lsquo; programs.
				</Text>
				<Box>
					<Heading size='md'>
						Payments: Subscriptions, Gift Cards, Refunds, Coupons, Taxes, Receipts
					</Heading>
					<Text>
						I implemented a plethora of features for the checkout system used by parents
						to pay for their childrens&lsquo; programs. I added functionality for
						subscriptions, gift cards, refunds, coupons, taxes, and receipts for an
						improved experience. This benefited parents as they were able to have better
						visibility as well as companies as they were able to promote their business.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Engineering Management</Heading>
					<Text>
						I trained and onboarded two full time developers to the engineering team. I
						reviewed all pull requests to ensure high code quality and functionality. I
						also controlled all deployments to our staging and production environments.
						I worked closely with the CEO to advise business decitions from a techincal
						perspective.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Analytics</Heading>
					<Text>
						I added analytics tracking for businesses to gather crucial business
						information. I added reports displaying data for tax and accounting
						purposes. I also added dashboards to view per program and per parent
						analytics.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Developer Infrastructure</Heading>
					<Text>
						I oversaw and updated many developer infrastructure workflows. I created
						deployment scripts which eliminated human error, thereby increasing uptime.
						I also modified the data storage hierchy to improve some page load times
						from 15 seconds to under 500ms improving future scalability.
					</Text>
				</Box>
			</Stack>
		</AboutPageLayout>
	);
};

export default Dreamschools;
