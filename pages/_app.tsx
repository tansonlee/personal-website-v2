import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<link rel='shortcut icon' href='/logo_light.png' />
				<title>Tanson Lee</title>
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</ChakraProvider>
	);
}

export default MyApp;
