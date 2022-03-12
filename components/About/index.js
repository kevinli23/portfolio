import React, { useState, useEffect } from 'react';
import { Heading, Box, Text, ListItem, UnorderedList } from '@chakra-ui/react';
import { Container, StyledLink } from './styledItems';
import { getColor } from '../../utils/colors';

const About = () => {
	const secondaryColor = getColor('landingSecondaryTextColor', 'light');
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
			<Heading size="2xl" fontFamily={'Calibre'}>
				About
			</Heading>
			<Box
				style={{
					borderTop: '1px solid black',
				}}
			/>
			<Container>
				<Heading fontFamily={'Calibre'} color={secondaryColor} size="lg">
					An introduction to me
				</Heading>
				<Text mt="10px" fontFamily={'Calibre'} fontSize="20px">
					I am a fourth year Computer Science student at the University of Waterloo.
					I enjoy architecting and designing solutions to problems, and of course,
					programming them.
				</Text>
				<Text mt="10px" fontFamily={'Calibre'} fontSize="20px">
					I am currently looking for Fall 2022 internships.
				</Text>
				{count && (
					<Text mt="10px" fontFamily={'Calibre'} fontSize="20px">
						I am also a proud donator of{' '}
						<span style={{ fontWeight: 'bold' }}>{count}</span> grains of rice.{' '}
						<StyledLink
							target="_blank"
							href="https://freerice.com/"
							inputColor="rgb(42,179,198)"
						>
							Learn More
						</StyledLink>
					</Text>
				)}
			</Container>

			<Container>
				<Heading fontFamily={'Calibre'} size="lg" color={secondaryColor}>
					During my spare time I enjoy
				</Heading>
				<UnorderedList pl="2%" mt="10px" fontFamily={'Calibre'} fontSize="20px">
					<ListItem>Keeping up with the NBA</ListItem>
					<ListItem>Discover new random technologies to experiment with</ListItem>
					<ListItem>Following crypto (Banano + Nano 🙌)</ListItem>
					<ListItem>Finding dull and mundane tasks to automate</ListItem>
					<ListItem>Watching cooking and comedy shows</ListItem>
					<ListItem>Playing TFT</ListItem>
				</UnorderedList>
			</Container>

			<Container>
				<Heading fontFamily={'Calibre'} color={secondaryColor} size="lg">
					Technologies I'm currently using
				</Heading>
				<UnorderedList pl="2%" mt="10px" fontFamily={'Calibre'} fontSize="20px">
					<ListItem>Golang, Python, Java, JavaScript, TypeScript, MySQL</ListItem>
					<ListItem>React, Node.js</ListItem>
					<ListItem>Git, Gradle, Bash, MongoDB, PostgreSQL</ListItem>
				</UnorderedList>
			</Container>
		</>
	);
};

export default About;
