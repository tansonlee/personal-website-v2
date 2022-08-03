import { Box, Heading, Image, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { AboutPageLayout } from '../../components/layout';

const UniversityOfWaterloo = () => {
	return (
		<AboutPageLayout
			title='University of Waterloo'
			subtext='Sept 2020 - May 2025'
			imagePath='/images/waterloo.jpeg'
		>
			<Stack spacing={8}>
				<Text>
					I'm a third year Computer Science student at the University of Waterloo. I learn
					fundamental concepts in school and practice applying them through my
					internships. Learn more about my experience at{' '}
					<Link href='/about/paper'>Paper.xyz</Link> and{' '}
					<Link href='/about/dreamschools'>Dreamschools</Link>.
				</Text>
				<Stack>
					<Heading size='md'>Freshman Year</Heading>
					<Text>
						My degree began with CS 145 where I learnt functional programming and the
						basics of correctness and runtime proofs. Apart from the usual, this course
						included writing programs using The Lambda Calculus and a mock machine
						language.
					</Text>
					<Text>
						Following this, I took CS 146 which introduced interpreters, compilers, and
						assemblers. We also learnt basic imperative programming in C. Our final
						project was to write three interpreters using three different approaches.
					</Text>
				</Stack>
				<Stack>
					<Heading size='md'>Sophmore Year</Heading>
					<Text>
						Starting second year, I took CS 246 which taught fundamental object-oriented
						programming in C++. We learnt about object-oriented concepts such as
						encapsulation, inheritance, and polymorphism. We were also introduced to
						software engineering principles such as design patterns, testing, and
						version control.
					</Text>
					<Text>
						At the same time, I took CS 251 where we learnt about computer hardware. We
						started with transistors and built levels of abstraction up to complex
						pipelined computer processors. We analyzed MIPS instruction execution on
						hardware and optimization techniques.
					</Text>
					<Text>
						The following term, I took CS 240 which is the first data structures and
						algorithms course. We learnt about Quadtrees, B-trees and Skip Lists in
						addition to the basic data structures. We also learnt several algorithms in
						several categories such as data compression, string matching, and sorting.
					</Text>
					<Text>
						Finally, CS 241 dove deeper into language parsing, assemby, and compilation.
						We built a language system from scratch including low level memory
						management tools.
					</Text>
				</Stack>
				<Stack>
					<Heading size='md'>Junior Year</Heading>
					<Text>The computer science courses that I&lsquo;m taking this term are.</Text>
					<UnorderedList pl={4}>
						<ListItem>CS 350: Operating Systems</ListItem>
						<ListItem>CS 341: Algorithms</ListItem>
						<ListItem>CS 349: User Interfaces</ListItem>
					</UnorderedList>
				</Stack>
			</Stack>
		</AboutPageLayout>
	);
};

export default UniversityOfWaterloo;
