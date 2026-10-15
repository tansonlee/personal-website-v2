import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
					<link
						href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					{/* Runs before paint so the saved or system theme applies without a flash */}
					<script
						dangerouslySetInnerHTML={{
							__html: `try{var t=localStorage.getItem('theme')}catch(e){}document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'`,
						}}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
