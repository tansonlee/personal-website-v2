import { Stack, Text, Box, OrderedList, ListItem, Heading } from '@chakra-ui/react';
import { AboutPageLayout } from '../../components/layout';

const GlobalIllumination = () => {
	return (
		<AboutPageLayout
			title='Global Illumination'
			location='Manhattan, New York'
			date='Jan - Apr 2023'
			imagePath='/images/reflection1.png'
		>
			<Text>
				As a Software Engineer at Global Illumination, I worked on developing Biomes which
				is a web-based massively-multiplayer voxel game that focuses on player creativity. I
				learned a whole lot about game development and thoroughly enjoyed my time in New
				York City.
			</Text>
			<Heading mt={10} mb={4} size='xl'>
				What I Worked On
			</Heading>
			<Stack spacing={8}>
				<Box>
					<Heading size='md'>Player Physics</Heading>
					<Text mt={2}>
						I improved the in-house physics engine to allow for improved player
						movement. The improvements include implementing
					</Text>
					<OrderedList pl={4} pt={2}>
						<ListItem>Swimming physics</ListItem>
						<ListItem>Ladder physics</ListItem>
						<ListItem>Auto-jump physics</ListItem>
					</OrderedList>
					<Text pt={2}>
						These changes made the game more realistic and immersive. Since the physics
						engine was built in house, this taught me a lot about how physics is
						implemented in a game.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Computer Graphics</Heading>
					<Text mt={2}>
						I implemented realistic water reflections in game which significantly
						elevates the visuals of the game. I did this through writing performant
						OpenGL shaders and using the screen space reflections technique.
					</Text>
					<Text mt={2}>
						Additionally, I also made water&lsquo;s color and fog vary depending on
						environmental conditions. This improved the feel of the world by making
						dangerous and safe environments feel more distinct.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Player Buffs</Heading>
					<Text mt={2}>
						I built out the infrastructure to support modifications on the player
						experience using the Entity Component System (ECS) architecture. This
						allowed for buffs to be implemented which are effects that are added to the
						player when they eat special foods, wear certain clothing, hold certain
						items, or be in certain locations. Some of these buffs include super speed,
						double jump, underwater breathing, and health regeneration. For example,
						drinking coffee gives speed; wearing a snorkel gives underwater breathing;
						and being in enemy territory gives muck sickness.
					</Text>
					<Text mt={2}>
						This project taught me about the importance of strong overarching code
						architecture. I talk more about the ECS architecture below, but it would be
						extremely difficult to implement this without a good unifying architecture
						like ECS.
					</Text>
					<Text mt={2}>
						I also learned about the importance of good internal tooling. Buffs were
						usually come up with by the designers and they always wanted to try things
						out without fully committing. With great tooling, designers can add buffs to
						any items and tweak buffs without any code changes which made iteration and
						experimentation occur much more.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Dynamic NPCs</Heading>
					<Text mt={2}>
						I added support for Newtonian physics for NPCs. This means that NPCs can
						move in 3 dimensions with realistic movement. As an application of this, I
						added a fish and turtle NPC type that have complex 3-dimensional flocking
						behavior. Their flocking accounts for the terrain, positions & velocities of
						other entities, and more.
					</Text>
					<Text mt={2}>
						This was a really rewarding project as the final product was seeing fish and
						birds move in a very satisfying way. The fish naturally group together and
						move in a swarming/flocking motion that is beautiful to watch.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Questing</Heading>
					<Text mt={2}>
						I extended the questing infrastructure to support more complex quest
						features.
					</Text>
					<Text mt={2}>
						To make quests more immersive, I added the functionality to let you talk to
						player-like NPCs throughout a quest. This lets them provide dialog which can
						explain motivations for quests and give back stories. It also allows for
						them to give gifts, rewards, and enable requirements for turning in certain
						items to pass the step. Without having these at a player-like NPC, the game
						immersion is broken as it doesn&lsquo;t make sense who is giving gifts or
						who is taking away items. This project came with a lot of UI and internal
						tooling work on top of the logical changes.
					</Text>
					<Text mt={2}>
						I also improved the questing experience through features like having quest
						markers on the map and displaying the current progress in a quest.
					</Text>
					<Text mt={2}>
						Questing work was rewarding since it was core to the game and also involved
						challenging problems. It involved interesting problems due to the recursive
						nature of quests. A quest is a tree of steps where each internal node is
						either an aggregation of steps or a concrete task to perform. For example, a
						step that is an internal node with 3 children could be a requirement to
						complete all 3 of the children steps. A step that is a leaf node could be
						something like harvest 10 coffee beans.
					</Text>
				</Box>
			</Stack>

			<Heading mt={10} mb={4} size='xl'>
				What I Learned
			</Heading>
			<Stack spacing={8}>
				<Box>
					<Heading size='md'>Game Development Infrastructure</Heading>
					<Text mt={2}>
						Infrastructure for games is very different from that of products I&lsquo;ve
						previously worked on. Games often use an architectural pattern called the
						Entity Component System (ECS). This essentially means that everything in the
						game is an entity and entities are composed of components the define their
						behavior. When implementing a behavior such as allowing food to be consumed,
						you don&lsquo;t think of it as wanting to make food consumable but rather
						wanting to make entities that have the `consumable` component able to be
						consumed. This system makes it incredibly easy to iterate fast and
						experiment.
					</Text>{' '}
					<Text mt={2}>
						Creating items that have completely ridiculous behaviors are easy with this
						architecture. Let&lsquo;s say that you want to add an easter egg where when
						you consume a sword, you get a `magician` buff which gives your player
						special particle effects. In this case, you can just add the `consumable`
						component and `buff` component to every sword entity that is created. Then
						have the `buff` component contain data that points to another entity which
						is the `magician` buff. Then, the `magician` buff entity can have a
						`particle` component that defines how the particles look visually. Without
						using the ECS architecture, this would be a custom implementation, but with
						the ECS architecture, this is just a matter of adding components to entities
						that define their behavior resulting in very little code change and no logic
						changes. This is crucial for games since there is unlimited room for all
						kinds of ridiculous behaviors that designers can come up with that would be
						difficult to implement custom each time.
					</Text>
					<Text mt={2}>
						Having a powerful resource system makes it easy to have up-to-date and
						reactive data. The resource architecture allows you to define resources that
						may depend on other resources. This means that when a resource invalidates,
						it propagates invalidations to all resources that depend on it. This makes
						it easy to trust that values are up to date. It also pairs nicely with a
						reactive front end library like react. The resource system can be hooked up
						to react such that resource invalidations also invalidate views causing
						rerenders. Ultimately, this means that the UI will always be in sync with
						the data.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Internal tooling for games</Heading>
					<Text mt={2}>
						At my previous companies which provided SASS products, internal tooling was
						pretty limited and used mainly as nice interfaces to perform repetitive
						tasks. For example, an admin tool for giving refunds -- not necessary but
						makes the task easier. On the other hand, strong admin tooling for games is
						not just convenient but necessary. The iteration cycle would be long and
						progress would be slow if every time a designer wanted to make a change to
						game behavior, they would need to ask an engineer to make the change. With
						good admin tooling, a designer can -- as per the previous example -- just
						implement sword eating and having that change applied immediately. This is
						crucial because in a game, a lot of features need to be felt out and tried
						out before committing to them. Good tooling lets designers experiment freely
						and quickly.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Computer Graphics</Heading>
					<Text mt={2}>
						This internship was the first time I touched computer graphics. I learned a
						lot about how graphics works. I wrote OpenGL vertex and fragment shaders
						that run on the GPU to implement visual alterations to the world. This was a
						totally different way of thinking since all computations are run in parallel
						on the GPU. This means that data sharing between threads was infeasible and
						pipelines need to be developed to share data.
					</Text>
				</Box>
			</Stack>

			{/* <Heading mt={10} mb={4} size='xl'>
				My Experience
			</Heading>
			<Stack spacing={8}>
				<Box>
					<Heading size='md'>Living in New York City</Heading>
					<Text>
						The feel of NYC is like no other. Its fast paced, busy, and full of life.
						Different parts of the city have significantly different vibes. Lower
						manhattan like the LES and East Village have a big night life filled mainly
						with young people. Midtown can be characterized with high rises and office
						buildings and working professionals. Flushing is the closest you can get to
						being in china without leaving North America. There is unlimited variety in
						just the one city.
					</Text>
					<Text>
						NYC has the best food scene out of any other city I have lived in. I almost
						never ate at the same spot twice and tried out cuisines that I have never
						tried before. It was my first time having omakase, Ethiopian food, South
						Indian dosa, Sri Lankan food, Jewish delis, and my first experience at a
						Michelin star restaurant.
					</Text>
					<Text>
						There is unlimited entertainment in the city and my favorites were Broadway
						shows and museums. My favorite show was The Book of Mormon and my favorite
						museums were the Intrepid museum and the Natural History Museum.
					</Text>
				</Box>
				<Box>
					<Heading size='md'>Working at Global Illumination</Heading>
					<Text>
						My coworkers were incredibly supportive and __. The main thing that stood
						out was their experience as they were all top engineers and designers at
						Instagram, Meta, and Google.
					</Text>
					<Text>Offsites</Text>
					<Text>care -- vacation days</Text>
				</Box>
			</Stack> */}
		</AboutPageLayout>
	);
};

export default GlobalIllumination;
