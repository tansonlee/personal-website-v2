import { IconButton, Link, ResponsiveValue } from '@chakra-ui/react';

const SocialLinkIcon = ({
	ariaLabel,
	link,
	icon,
	size,
}: {
	ariaLabel: string;
	link: string;
	icon: any;
	size: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg' | 'xs'> | undefined;
}) => {
	return (
		<Link href={link} isExternal>
			<IconButton
				aria-label={ariaLabel}
				icon={icon}
				variant='outline'
				colorScheme='blue'
				size={size}
				isRound={true}
				m={2}
			/>
		</Link>
	);
};

export default SocialLinkIcon;
