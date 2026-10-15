import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/logo_light.png' />
				<title>Tanson Lee</title>
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default MyApp;
