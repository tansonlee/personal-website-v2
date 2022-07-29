import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
	useSystemColorMode: false,
	initialColorMode: 'dark',
};

const components = {
	Link: {
		baseStyle: (props: StyleFunctionProps) => ({}),
	},
};

const styles = {
	global: (props: any) => ({
		html: {
			scrollBehavior: 'smooth',
		},
		body: {
			bg: mode('gray.100', '#11151c')(props),
		},
	}),
};

const theme = extendTheme({ config, styles, components });

export default theme;
