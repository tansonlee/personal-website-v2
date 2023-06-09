import {
	Box,
	Code,
	Heading,
	Image,
	Link,
	ListItem,
	Stack,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { AboutPageLayout } from '../../components/layout';

const UniversityOfWaterloo = () => {
	return (
		<AboutPageLayout
			title='University of Waterloo'
			date='Sept 2020 - May 2025'
			location='Waterloo, Ontario'
			imagePath='/images/waterloo.jpeg'
		>
			<Stack spacing={8}>
				<Text>
					I&lsquo;m a third year Computer Science student at the University of Waterloo. I
					learn fundamental concepts in school and practice applying them through my
					internships. Learn more about my experience at{' '}
					<Link href='/about/global-illumination'>Global Illumination</Link>,{' '}
					<Link href='/about/paper'>Paper.xyz</Link>, and{' '}
					<Link href='/about/dreamschools'>Dreamschools</Link>.
				</Text>
				<Stack>
					<Heading size='md'>First Year</Heading>
					<Text>
						My degree began with{' '}
						<Text as='span' fontWeight='semibold'>
							CS 145
						</Text>{' '}
						where I learnt functional programming and the basics of correctness and
						runtime proofs. Apart from the usual, this course included writing programs
						using The Lambda Calculus and a mock machine language.
					</Text>
					<Text>
						Following this, I took{' '}
						<Text as='span' fontWeight='semibold'>
							CS 146
						</Text>{' '}
						which introduced interpreters, compilers, and assemblers. We also learnt
						basic imperative programming in C. Our final project was to write three
						interpreters using three different approaches.
					</Text>
				</Stack>
				<Stack>
					<Heading size='md'>Second Year</Heading>
					<Text>
						Starting second year, I took{' '}
						<Text as='span' fontWeight='semibold'>
							CS 246
						</Text>{' '}
						which taught fundamental object-oriented programming in C++. We learnt about
						object-oriented concepts such as encapsulation, inheritance, and
						polymorphism. We were also introduced to software engineering principles
						such as design patterns, testing, and version control.
					</Text>
					<Text>
						At the same time, I took{' '}
						<Text as='span' fontWeight='semibold'>
							CS 251
						</Text>{' '}
						where we learnt about computer hardware. We started with learning about
						transistors and built up levels of abstraction all the way to pipelined
						computer CPUs. We analyzed ARM instruction execution on hardware and applied
						hardware optimization techniques.
					</Text>
					<Text>
						The following term, I took{' '}
						<Text as='span' fontWeight='semibold'>
							CS 240
						</Text>{' '}
						which is the first data structures and algorithms course. We learnt about
						Quadtrees, B-trees and Skip Lists in addition to the typical basic data
						structures. We also learnt several algorithms in several categories such as
						data compression, string matching, and sorting.
					</Text>
					<Text>
						Finally,{' '}
						<Text as='span' fontWeight='semibold'>
							CS 241
						</Text>{' '}
						dove deeper into language parsing, assemby, and compilation. We built a
						language system from scratch including low level memory management tools.
					</Text>
				</Stack>
				<Stack>
					<Heading size='md'>Junior Year</Heading>
					<Text>
						My favorite course of the term was{' '}
						<Text as='span' fontWeight='semibold'>
							CS 350
						</Text>{' '}
						Operating Systems. In this class, we first learnt about multithreaded
						programs using synchronization primitives such as locks, semaphores, and
						conditional variables. We then implemented these primitives within a mock
						operating system. Finally, we implemented several crucial primitives to the
						operating system including paging, forking processes (<Code>fork</Code>
						), and executing programs (<Code>execv</Code>
						).
					</Text>
					<Text>
						I also took{' '}
						<Text as='span' fontWeight='semibold'>
							CS 341
						</Text>{' '}
						Algorithms which taught many algorithms and theoretical concepts surrounding
						algorithms in general. A few topics were divide and conquer, dynamic
						programming, graph algorithms, and greedy algorithms. I also explored the P
						vs NP millennium problem.
					</Text>
					<Text>
						The last course I took that term was{' '}
						<Text as='span' fontWeight='semibold'>
							CS 349
						</Text>{' '}
						User Interfaces. We learnt about the theory behind user interfaces and
						created several visual apps to apply our knowledge. Some things I created
						were Connect-4 and a data visualization application.
					</Text>
					<Text>The computer science courses that I&lsquo;m taking this term are.</Text>
					<UnorderedList pl={4}>
						<ListItem>CS 456: Computer Networking</ListItem>
						<ListItem>CS 486: Intro to Artificial Intelligence</ListItem>
						<ListItem>CS 348: Database Management</ListItem>
						<ListItem>CS 370: Numerical Computation</ListItem>
					</UnorderedList>
				</Stack>
			</Stack>
		</AboutPageLayout>
	);
};

export default UniversityOfWaterloo;
