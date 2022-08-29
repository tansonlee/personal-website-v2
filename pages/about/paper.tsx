import {
	Box,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	ListItem,
	OrderedList,
	Stack,
	Text,
} from '@chakra-ui/react';
import { AboutPageLayout } from '../../components/layout';

const Paper = () => {
	return (
		<AboutPageLayout
			title='Paper.xyz'
			link='https://paper.xyz'
			subtext='San Francisco, California | May - Aug 2022'
			imagePath='/images/paper.png'
		>
			<Stack spacing={8}>
				<Text>
					I was one of four software engineers at Paper. Paper is a developer-facing
					platform that enables buyers to purchase NFTs simply with a credit card. Paper
					provides SDK components for developers to easily implement Paper checkouts into
					their application. Paper focuses on NFTs that have utility, for example, an NFT
					which acts as a ticket to gate a real-life event.
				</Text>
				<Box>
					<Text>The two major challenges I spot in the web3 space are</Text>
					<OrderedList pl={4}>
						<ListItem>Bridging web2 brands and customers into the web3 space.</ListItem>
						<ListItem>
							The presence of fraudsters in the space causing people to lose trust.
						</ListItem>
					</OrderedList>
				</Box>
				<Box>
					<Heading size='md'>Auctioning System</Heading>
					<Text>
						I developed an auctions system allowing buyers to place bids using a credit
						card. I worked closely with the execution of smart contract functions on the
						blockchain. There were many complex race conditions since on-chain
						transactions take several seconds to execute and the reliability of
						execution on the Ethereum Virtual Machine is irregular. I used redis to
						cache blockchain reads to cut latency from ~2sec to less than 0.1sec on
						average. I also used a job queues to improve the reliability of blockchain
						writes.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>USD Payouts</Heading>
					<Text>
						Many sellers don&lsquo;t feel comfortable holding cryptocurrency due to its
						volatility. I added the ability for sellers to be paid out in USD for the
						revenue they made. This made sellers more comfortable and helped bridge the
						gap between web2 and web3.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Seller Onboarding</Heading>
					<Text>
						I updated the onboarding flow for NFT sellers to be easy, legally compliant,
						and encourage buyer trust. The onboarding process includes uploading
						business documents and images to prevent working with money launderers,
						fraudsters, and sanctioned sellers. This encourages trust from buyers of the
						NFTs.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Beginner Wallets</Heading>
					<Text>
						I reduced friction for web3 beginners purchasing their first NFT by adding
						the ability to purchase to a beginner wallet. This allows buyers to create
						and connect a wallet with just an email address. Previously, buyers would
						need to create a non-custodial wallet which included steps such as noting
						down a 12 word phrase which was intimidating. The wallet is non-custodial so
						buyers have complete control over their private key.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Members and Organizations</Heading>
					<Text>
						I implemented a system which allows multiple people from the same company to
						collaborate in the Paper dashboard. It allows people to invite their
						colleagues to their organization to register contracts, upload documents,
						and more. This is especially useful for enterprise customer who have large
						teams.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Localization in French</Heading>
					<Text>
						In the spirit of making web3 more accessible, I developed the infrastructure
						around localizing the SDK and added localization for French.
					</Text>
				</Box>
				<Text>
					In addition to these larger projects, I worked on a plethora of smaller tasks
					including enabling multi-factor authentication for users&lsquo; wallets and
					signature based minting. I also participated extensively in product discussions,
					building user-facing documentation, and providing developer support.
				</Text>
			</Stack>
		</AboutPageLayout>
	);
};

export default Paper;
