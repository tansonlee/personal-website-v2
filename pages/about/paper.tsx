import { Box, Divider, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
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
					I was one of four software engineers at Paper working on the full stack
					application. Paper is a developer-facing platform that focuses on helping
					marketplaces and launchpads sell NFTs easily. It enables buyers to buy NFTs
					simply through a credit card or cross-chain cryptocurrencies. Paper provides
					JavaScript SDK components for developers to easily implement Paper checkouts
					into their application. Paper focuses on NFTs that have utility, such as an NFT
					which acts as a ticket to gate a real-life event.
				</Text>
				<Text>
					The two major challenges I spotted in the web3 space is the difficulty of use
					and trustworthiness of people. Everything I did tried to address these two
					issues.
				</Text>
				<Box>
					<Heading size='md'>Seller Onboarding</Heading>
					<Text>
						I updated the seller onboarding flow with the goal to make it easy and
						encourage buyer trust. The onboarding process includes uploading various
						documents and images to prevent working with money launderers, fraudsters,
						and sanctioned sellers. This encourages trust from buyers of the NFTs
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Auctions System</Heading>
					<Text>
						I developed an auctions system for sellers to sell their NFTs. I worked
						closely with executing smart contract functions on the blockchain. There
						were many complexities with race conditions as on-chain transactions take
						several seconds and the reliability of execution on the Ethereum Virtual
						Machine is questionable.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Beginner Wallets</Heading>
					<Text>
						I reduced the friction of purchasing NFTs by web3 beginners by adding the
						ability to purchase to a beginner wallet. This allows buyers to create and
						connect a wallet with just an email address. This functionality worked for
						both Solana and EVM blockchains.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>USD Payouts</Heading>
					<Text>
						Many sellers didn't feel comfortable holding cryptocurrency due to the
						volatility. I added the ability for sellers to be paid out in USD. This made
						sellers more comfortable and onboarded more people into the web3 space.
					</Text>
				</Box>
				<Text>
					In addition to these, I worked on many other small tasks such as enabling MFA to
					the accounts and enabling signature based minting. developer support. since
					paper was such a small company, I was also involved in product descisions
					documentation
				</Text>
			</Stack>
		</AboutPageLayout>
	);
};

export default Paper;
