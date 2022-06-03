import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Icon, Link } from '@chakra-ui/react';

const LearnMoreButton = () => {
	return (
		<Button
			className='learn-more-button'
			rounded='3xl'
			size='sm'
			variant='outline'
			pr='20px'
			pl={4}
			mt={2}
		>
			<Link
				className='learn-more-link'
				display='inline-block'
				transition='all 300 ease'
				_hover={{}}
			>
				Learn more <Icon as={ArrowForwardIcon} />
			</Link>
		</Button>
	);
};

export default LearnMoreButton;
