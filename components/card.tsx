import { Flex, useColorModeValue } from '@chakra-ui/react';

export const Card = ({ children }: { children: JSX.Element }) => {
	const bgColor = useColorModeValue('#fff', 'rgba(255,255,255,0.05)');
	const shaddow = useColorModeValue('sm', 'lg');

	return (
		<Flex
			bgColor={bgColor}
			borderRadius='xl'
			p={6}
			position='relative'
			shadow={shaddow}
			data-aos='zoom-in-up'
			data-aos-once='true'
			data-aos-anchor-placement='top-bottom'
		>
			{children}
		</Flex>
	);
};
