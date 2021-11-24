import React, { useState, useEffect } from 'react';
import {
	Heading,
	Divider,
	Text,
	ListItem,
	UnorderedList,
	useColorMode,
	Link,
} from '@chakra-ui/react';
import { Container } from './styledItems';
import { getColor } from '../../utils/colors';

const About = () => {
	const { colorMode } = useColorMode();
	const secondaryColor = getColor('landingSecondaryTextColor', colorMode);
	const font = getColor('font', colorMode);
	const [count, setCount] = useState(0);

	useEffect(() => {
		(async () => {
			const res = await fetch(`https://www.kevin-li.tech/api/rice`);
			const data = await res.json();
			setCount(data.count);
		})();
	}, []);

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
					I am a fourth year Computer Science student at the University of Waterloo.
					I enjoy architecting and designing solutions to problems - and of course,
					programming them.
				</Text>
				<Text mt="1px">
					I am actively looking to learn new technologies, approaches or
					perspectives. programming them. I am currently looking for Spring 2022 and
					Fall 2022 internships.
				</Text>
				{count && (
					<Text mt="10px">
						I am also a proud donator of{' '}
						<span style={{ fontWeight: 'bold' }}>{count}</span> grains of rice.{' '}
						<Link
							target="_blank"
							href="https://freerice.com/"
							color="rgb(42,179,198)"
						>
							Learn More
						</Link>
						!
					</Text>
				)}
			</Container>

			<Container>
				<Heading fontFamily={font} color={secondaryColor} size="md">
					During my spare time I enjoy
				</Heading>
				<UnorderedList pl="2%" mt="10px">
					<ListItem>Keeping up with the NBA</ListItem>
					<ListItem>Discover new random technologies to experiment with</ListItem>
					<ListItem>Following crypto (Banano 💎🙌)</ListItem>
					<ListItem>Finding dull and mundane tasks to automate</ListItem>
					<ListItem>Watching cooking and comedy shows</ListItem>
				</UnorderedList>
			</Container>

			<Container>
				<Heading fontFamily={font} color={secondaryColor} size="md">
					Technologies
				</Heading>
				<UnorderedList pl="2%" mt="10px">
					<ListItem>
						Languages: Golang, Python, Java, C#, C++, JavaScript, TypeScript, MySQL
					</ListItem>
					<ListItem>
						Libraries/Frameworks: React, Redux, Node.js, GraphQL, Electron
					</ListItem>
					<ListItem>Tools/Other: Git, Gradle, Bash, MongoDB, PostgreSQL</ListItem>
					<ListItem>Learning/Interested: Deno, System Design</ListItem>
				</UnorderedList>
			</Container>
		</>
	);
};

export default About;
