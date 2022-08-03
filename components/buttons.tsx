import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Icon, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { isExternal } from 'util/types';

export const ForwardButton = ({
	href,
	isExternal = false,
	children,
}: {
	href: string;
	isExternal?: boolean;
	children: string;
}) => {
	const router = useRouter();

	const handleClick = () => {
		if (isExternal) {
			window.open(href, '_blank')?.focus();
		} else {
			router.push(href);
		}
	};

	return (
		<Button
			className='forward-button'
			rounded='3xl'
			size='sm'
			variant='outline'
			pr='20px'
			pl={4}
			mt={2}
			mr={2}
			onClick={handleClick}
		>
			<Link
				className='forward-link'
				display='inline-block'
				transition='all 300 ease'
				_hover={{}}
			>
				{children} <Icon as={ArrowForwardIcon} />
			</Link>
		</Button>
	);
};

export const BackwardButton = ({
	href,
	isExternal = false,
	children,
}: {
	href: string;
	isExternal?: boolean;
	children: string;
}) => {
	const router = useRouter();

	const handleClick = () => {
		if (isExternal) {
			window.open(href, '_blank')?.focus();
		} else {
			router.push(href);
		}
	};

	return (
		<Button
			className='backward-button'
			rounded='3xl'
			size='sm'
			variant='outline'
			mt={2}
			onClick={handleClick}
		>
			<Link
				pl={2}
				className='backward-link'
				display='inline-block'
				transition='all 300 ease'
				_hover={{}}
			>
				<Icon mr={2} as={ArrowBackIcon} /> {children}
			</Link>
		</Button>
	);
};
