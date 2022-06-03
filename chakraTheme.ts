import { extendTheme } from '@chakra-ui/react';

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
	backgroundColor: {
		dark: '#1a202c',
		darkTranslucent: '#1a202cdd',
		light: '#fff',
		lightTranslucent: '#fffd',
	},
	accent: {
		100: 'red',
	},
	primary: {
		100: '',
		200: '',
		300: '',
	},
	text: {
		primary: '',
		secondary: '#aaa',
	},
};

const config = {
	useSystemColorMode: false,
	initialColorMode: 'dark',
};

const components = {
	Text: {
		variants: {
			subtle: {
				color: 'text.secondary',
				fontStyle: 'italic',
			},
		},
	},
	Link: {
		baseStyle: {},
	},
};

const styles = {
	global: (props: any) => ({
		html: {
			scrollBehavior: 'smooth',
		},
	}),
};

const theme = extendTheme({ colors, config, styles, components });

export default theme;
