import React from 'react';
import { IconButton, Link, useColorModeValue } from '@chakra-ui/react';
import { Container, Line } from './styledItems';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const SocialsBar = () => {
	const lineColor = useColorModeValue('black', 'white');
	return (
		<Container>
			<Link href="https://www.linkedin.com/in/kevinli230/" target="_blank">
				<IconButton
					style={{ marginBottom: '10px' }}
					icon={<FaLinkedin />}
					fontSize="2em"
					colorScheme="black"
					variant="outline"
				/>
			</Link>
			<Link href="https://github.com/kevinli23" target="_blank">
				<IconButton
					style={{ marginBottom: '10px' }}
					icon={<FaGithub />}
					fontSize="2em"
					colorScheme="black"
					variant="outline"
				/>
			</Link>
			<Link
				href="https://drive.google.com/file/d/1vlJ6Kgt81QMW2h6p1ko9OrkEwb6SdVtI/view?usp=sharing"
				target="_blank"
			>
				<IconButton
					style={{ marginBottom: '10px' }}
					icon={<FaFilePdf />}
					fontSize="2em"
					colorScheme="black"
					variant="outline"
				/>
			</Link>
			<Line height="70" color={lineColor} />
		</Container>
	);
};

export default SocialsBar;
