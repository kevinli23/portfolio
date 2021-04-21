import React from 'react';
import { Container, Line } from './styledItems';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const SocialsBar = () => {
	return (
		<Container>
			<FaLinkedin style={{ marginBottom: '10px' }} size="2em" />
			<FaGithub style={{ marginBottom: '10px' }} size="2em" />
			<FaFilePdf style={{ marginBottom: '10px' }} size="2em" />
			<Line height="50" />
		</Container>
	);
};

export default SocialsBar;
