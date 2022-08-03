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
					platform that focuses on helping marketplaces and launchpads sell NFTs easily.
					It enables buyers to buy NFTs simply through credit card or cross-chain
					cryptocurrencies. Paper provides SDK components for developers to easily
					implement Paper checkouts into their application. Paper focuses on NFTs that
					have utility, such as an NFT which acts as a ticket to gate a real-life event.
				</Text>
				<Box>
					<Text>The two major challenges I spot in the web3 space are</Text>
					<OrderedList pl={4}>
						<ListItem>The difficulty to onboard non-web3 natives.</ListItem>
						<ListItem>The presence of fraudsters slashing the trust of users.</ListItem>
					</OrderedList>
				</Box>
				<Box>
					<Heading size='md'>Auctioning System</Heading>
					<Text>
						I developed an auctions system for sellers to sell their NFTs. I worked
						closely with the execution of smart contract functions on the blockchain.
						There were many complex race conditions to patch as on-chain transactions
						take several seconds and the reliability of execution on the Ethereum
						Virtual Machine is irregular.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>USD Payouts</Heading>
					<Text>
						Many sellers don't feel comfortable holding cryptocurrency due to its
						volatility. I added the ability for sellers to be paid out in USD. This made
						sellers more comfortable and onboarded new people into the web3 space.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Onboarding</Heading>
					<Text>
						I updated the onboarding flow for NFT sellers with the goal to make it easy
						and encourage buyer trust. The onboarding process includes uploading various
						documents and images to prevent working with money launderers, fraudsters,
						and sanctioned sellers. This encourages trust from buyers of the NFTs.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Beginner Wallets</Heading>
					<Text>
						I reduced friction for web3 beginners purchasing their first NFT by adding
						the ability to purchase through a beginner wallet. This allows buyers to
						create and connect a wallet with just an email address. Buyers would
						originally need to create a non-custodial wallet which included steps such
						as noting down a 12 word phrase. This functionality works for both Solana
						and EVM blockchains.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Multi-user Organization</Heading>
					<Text>
						I implemented multi-user organization which allows multiple people from the
						same company to access the same account with different email addresses. This
						is beneficial for larger companies that integrated with Paper. There is only
						a hand full of web3 companies with this seemingly obvious feature.
					</Text>
				</Box>
				<Text>
					In addition to these larger projects, I worked on smaller tasks including
					enabling multi-factor authentication for users' wallets and signature based
					minting. I also participated extensively in product discussions, building
					user-facing documentation, and providing developer support.
				</Text>
			</Stack>
		</AboutPageLayout>
	);
};

export default Paper;
