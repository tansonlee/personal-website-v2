import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Icon, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const ForwardButton = ({ href, children }: { href: string; children: string }) => {
	const router = useRouter();
	return (
		<Button
			className='forward-button'
			rounded='3xl'
			size='sm'
			variant='outline'
			pr='20px'
			pl={4}
			mt={2}
			onClick={() => router.push(href)}
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

export const BackwardButton = ({ href, children }: { href: string; children: string }) => {
	const router = useRouter();
	return (
		<Button
			className='backward-button'
			rounded='3xl'
			size='sm'
			variant='outline'
			mt={2}
			onClick={() => router.push(href)}
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
