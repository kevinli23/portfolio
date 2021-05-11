import React from 'react';
import {
	Heading,
	Divider,
	Text,
	List,
	ListItem,
	UnorderedList,
	useColorMode,
} from '@chakra-ui/react';
import { Container } from './styledItems';
import { FaReact } from 'react-icons/fa';
import { getColor } from '../../utils/colors';

const About = () => {
	const { colorMode } = useColorMode();
	const secondaryColor = getColor('landingSecondaryTextColor', colorMode);
	const font = getColor('font', colorMode);

	return (
		<>
			<Heading size="2xl" mb="10px">
				About
			</Heading>
			<Divider />
			<Container>
				<Heading fontFamily={font} color={secondaryColor} size="md">
					An introduction to me
				</Heading>
				<Text mt="10px">
					I am a third year Computer Science student at the University of Waterloo. I
					enjoy architecting and designing solutions to problems - and of course,
					programming them. I am actively looking to learn new technologies,
					approaches or perspectives. programming them. I am currently looking for
					Fall 2021, Spring 2022 and Fall 2022 internships.
				</Text>
			</Container>

			<Container>
				<Heading fontFamily={font} color={secondaryColor} size="md">
					During my spare time I enjoy
				</Heading>
				<UnorderedList pl="2%" mt="10px">
					<ListItem>Keeping up with the NBA</ListItem>
					<ListItem>Discover new random technologies to experiment with</ListItem>
					<ListItem>Following crypto (Dogecoin 💎🙌)</ListItem>
					<ListItem>
						Playing video games (League of Legends, TFT, Minecraft to name a few)
					</ListItem>
				</UnorderedList>
			</Container>

			<Container>
				<Heading fontFamily={font} color={secondaryColor} size="md">
					Technologies
				</Heading>
				<UnorderedList pl="2%" mt="10px">
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
