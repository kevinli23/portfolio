import React from 'react';
import {
	Heading,
	Divider,
	Text,
	List,
	ListItem,
	UnorderedList,
} from '@chakra-ui/react';
import { Container } from './styledItems';
import { FaReact } from 'react-icons/fa';

const About = () => {
	return (
		<>
			<Heading size="2xl" style={{ marginBottom: '10px' }}>
				About
			</Heading>
			<Divider />
			<Container>
				<Heading size="md">An introduction to me</Heading>
				<Text style={{ marginTop: '10px' }}>
					I am a third year Computer Science student at the University of Waterloo. I
					enjoy architecting and designing solutions to problems - and of course,
					programming them. I am actively looking to learn new technologies,
					approaches or perspectives. programming them. I am currently looking for
					Fall 2021, Spring 2022 and Fall 2022 internships.
				</Text>
			</Container>

			<Container>
				<Heading size="md">During my spare time I enjoy</Heading>
				<UnorderedList style={{ paddingLeft: '2%', marginTop: '10px' }}>
					<ListItem>Keeping up with the NBA</ListItem>
					<ListItem>Discover new random technologies to experiment with</ListItem>
					<ListItem>Following crypto (Dogecoin 💎🙌)</ListItem>
					<ListItem>
						Playing video games (League of Legends, Pokemon, Minecraft to name a few)
					</ListItem>
				</UnorderedList>
			</Container>

			<Container>
				<Heading size="md">Technologies</Heading>
				<UnorderedList style={{ paddingLeft: '2%', marginTop: '10px' }}>
					<ListItem>
						Languages: Java, Python, C#, C++, JavaScript, TypeScript, MySQL
					</ListItem>
					<ListItem>
						Libraries/Frameworks: React, Redux, Node.js, GraphQL, Electron, Pandas,
						Keras
					</ListItem>
					<ListItem>Tools/Other: Git, Gradle, Bash, MongoDB</ListItem>
					<ListItem>
						Learning/Interested: Golang, Deno, Redis, Reinforcement Learning
					</ListItem>
				</UnorderedList>
			</Container>
		</>
	);
};

export default About;
