import {
	Image,
	Box,
	Flex,
	Heading,
	Grid,
	Text,
	Link,
	HStack,
	Stack,
	Code,
	useColorModeValue,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { ForwardButton } from './buttons';
import { Card } from './card';
import SocialLinkIcon from './socialLinkIcon';

const Projects = () => {
	return (
		<Box id='projects'>
			<Flex mt='64px' align='center'>
				<SocialLinkIcon
					ariaLabel='Github link'
					link='https://github.com/tansonlee'
					icon={<BsGithub />}
					size='md'
				/>
				<Heading>Projects</Heading>
			</Flex>
			<Text mb={4}>
				Visit my{' '}
				<Link textDecor='underline' href='https://github.com/tansonlee' isExternal>
					GitHub
				</Link>{' '}
				for more!
			</Text>
			<Grid
				gridTemplateColumns={{
					base: 'repeat(1, minmax(0, 1fr))',
					lg: 'repeat(2, minmax(0, 1fr))',
				}}
				gap={8}
			>
				<EchoCacheProjectCard />
				<RayTracerProjectCard />
				<NotifyrProjectCard />
				<FooderProjectCard />
				<RustyRacketProjectCard />
				<PyScriptProjectCard />
			</Grid>
		</Box>
	);
};

const EchoCacheProjectCard = () => {
	return (
		<Card>
			<Stack w='100%'>
				<Heading as='h3' size='lg' textAlign='center'>
					Echo Cache
				</Heading>
				<HStack justify='center'>
					<Image
						rounded='md'
						bgColor='white'
						py={2}
						px={6}
						src='/images/echo_cache.png'
						h='220px'
						alt=''
					/>
				</HStack>

				<Box>
					<Text>
						Echo cache is a distributed, scalable, in-memory caching solution
						prioritizing performance and simplicity.
					</Text>
					<Flex>
						<ForwardButton
							isExternal={true}
							href='https://github.com/tansonlee/echo-cache'
						>
							Code
						</ForwardButton>
					</Flex>
				</Box>
			</Stack>
		</Card>
	);
};

const RayTracerProjectCard = () => {
	return (
		<Card>
			<Stack w='100%'>
				<Heading as='h3' size='lg' textAlign='center'>
					Ray Tracer
				</Heading>
				<HStack justify='center'>
					<Image rounded='md' src='/images/ray_tracer.png' h='220px' alt='' />
				</HStack>

				<Box>
					<Text>
						A ray tracer fitted with features such as multi-threading and camera
						positioning. It can render multiple materials including metal, glass, and
						matte surfaces.
					</Text>
					<Flex>
						<ForwardButton
							isExternal={true}
							href='https://github.com/tansonlee/ray-tracer'
						>
							Code
						</ForwardButton>
					</Flex>
				</Box>
			</Stack>
		</Card>
	);
};

const PyScriptProjectCard = () => {
	return (
		<Card>
			<Stack w='100%'>
				<Heading as='h3' size='lg' textAlign='center'>
					PyScript
				</Heading>
				<HStack justify='center'>
					<Box
						overflowX='auto'
						w='100%'
						fontSize='xs'
						bgColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
						p={2}
						borderRadius='md'
					>
						<pre>
							{`function determine_prime {
    change d_prime_result 1
    change d_prime_current 2
    if |d_prime_number < 2| {
        change d_prime_result 0
    } {}
    while |d_prime_current < d_prime_number|
    {
        if |!d_prime_number % d_prime_current! = 0| {
            change d_prime_result 0
        } {}
        change d_prime_current !d_prime_current + 1!
    }
}`}
						</pre>
					</Box>
				</HStack>

				<Box>
					<Text>
						PyScript is a scripting language with all core features including variables,
						functions, loops, conditionals, I/O, and comments. I implemented a compiler
						and assembler to translate PyScript down to a custom machine language which
						is executed by a custom runtime simulator.
					</Text>
					<Flex>
						<ForwardButton
							isExternal={true}
							href='https://replit.com/@TansonL/PyScript#program.ps'
						>
							Hosted Project
						</ForwardButton>
						<ForwardButton
							isExternal={true}
							href='https://github.com/tansonlee/PyScript#introduction'
						>
							Code
						</ForwardButton>
					</Flex>
				</Box>
			</Stack>
		</Card>
	);
};

const RustyRacketProjectCard = () => {
	return (
		<Card>
			<Stack w='100%'>
				<Heading as='h3' size='lg' textAlign='center'>
					Rusty Racket
				</Heading>
				<HStack justify='center'>
					<Box
						overflowX='auto'
						w='100%'
						fontSize='xs'
						bgColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
						p={2}
						borderRadius='md'
					>
						<pre>
							{`(include stdlib::list)

(define (main) (list-sum (list (fibonacci 1) (fibonacci 2) (fibonacci 3))))

(define (fibonacci n)
    (cond
        [(= n 0) 0]
        [(= n 1) 1]
        [true (+ (fibonacci (- n 1)) (fibonacci (- n 2)))]))

(define (list-sum lst)
    (cond
        [(empty? lst) 0]
        [true (+ (car lst) (list-sum (cdr lst)))]))`}
						</pre>
					</Box>
				</HStack>

				<Box>
					<Text>
						Rusty Racket is an interpreter for the Racket programming language written
						in Rust. Racket is a purely functional language with Lisp-like syntax. The
						interpreter is comprised of the preprocessor, tokenizer, parser, and
						interpreter.
					</Text>
					<Flex>
						<ForwardButton
							isExternal={true}
							href='https://replit.com/@TansonL/PyScript#program.ps'
						>
							Hosted Project
						</ForwardButton>
						<ForwardButton
							isExternal={true}
							href='https://github.com/tansonlee/PyScript#introduction'
						>
							Code
						</ForwardButton>
					</Flex>
				</Box>
			</Stack>
		</Card>
	);
};

const NotifyrProjectCard = () => {
	return (
		<Card>
			<Stack>
				<Heading as='h3' size='lg' textAlign='center'>
					Notifyr
				</Heading>
				<HStack justify='center'>
					<Image
						rounded='md'
						src='/images/notifyr.png'
						h='220px'
						border='1px solid #666'
						alt=''
					/>
				</HStack>

				<Box>
					<Text>
						Notifyr is a developer tool allowing SASS applications to send notifications
						to their customers. This includes an SDK, API, dashboard, and documentation.
					</Text>
					<Flex>
						<ForwardButton isExternal={true} href='https://notifyr.vercel.app/'>
							Hosted Project
						</ForwardButton>
						<ForwardButton
							isExternal={true}
							href='https://github.com/tansonlee/notifyr'
						>
							Code
						</ForwardButton>
					</Flex>
				</Box>
			</Stack>
		</Card>
	);
};

const FooderProjectCard = () => {
	return (
		<Card>
			<Stack>
				<Heading as='h3' size='lg' textAlign='center'>
					Fooder
				</Heading>
				<HStack justify='center' overflow='hidden'>
					<Image
						rounded='md'
						src='/images/fooder_1.png'
						h='220px'
						border='1px solid #fff'
						alt=''
					/>
					<Image
						rounded='md'
						src='/images/fooder_2.png'
						h='220px'
						border='1px solid #fff'
						display={{ base: 'none', sm: 'block', md: 'none', xl: 'block' }}
						alt=''
					/>
					<Image
						rounded='md'
						src='/images/fooder_3.png'
						h='220px'
						border='1px solid #fff'
						display={{ base: 'none', sm: 'block', md: 'none', lg: 'block' }}
						alt=''
					/>
					<Image
						rounded='md'
						src='/images/fooder_4.png'
						h='220px'
						border='1px solid #fff'
						alt=''
					/>
				</HStack>

				<Box>
					<Text>
						Fooder helps friend groups decide where to eat. Everyone joins a shared room
						on their device, then accepts or declines restaurants. A list of restaurants
						that are unanimously accepted is displayed to the group.
					</Text>
					<Flex>
						<ForwardButton isExternal={true} href='https://fooderweb.netlify.app/'>
							Hosted Project
						</ForwardButton>
						<ForwardButton
							isExternal={true}
							href='https://github.com/tansonlee/fooder-frontend'
						>
							Code
						</ForwardButton>
					</Flex>
				</Box>
			</Stack>
		</Card>
	);
};

export default Projects;
