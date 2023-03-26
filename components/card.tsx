import { Flex, useColorModeValue } from '@chakra-ui/react';

export const Card = ({ children }: { children: JSX.Element }) => {
	const bgColor = useColorModeValue('#fff', 'rgba(255,255,255,0.05)');
	const shadow = useColorModeValue('md', 'lg');
	const border = useColorModeValue('1px solid #eee', 'none');

	return (
		<Flex
			bgColor={bgColor}
			borderRadius='xl'
			p={6}
			position='relative'
			shadow={shadow}
			data-aos='zoom-in-up'
			data-aos-once='true'
			data-aos-anchor-placement='top-bottom'
			border={border}
		>
			{children}
		</Flex>
	);
};
