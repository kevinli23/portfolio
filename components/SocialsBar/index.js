import React from 'react';
import { IconButton, Link, Icon } from '@chakra-ui/react';
import { Container, Line } from './styledItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const SocialsBar = () => {
	return (
		<Container>
			<Link href="https://www.linkedin.com/in/kevinli230/" target="_blank">
				<IconButton
					style={{ marginBottom: '20px' }}
					icon={<FontAwesomeIcon icon={faLinkedinIn} />}
					size="xs"
				/>
			</Link>
			<Link href="https://github.com/kevinli23" target="_blank">
				<IconButton
					style={{ marginBottom: '10px' }}
					icon={<FontAwesomeIcon icon={faGithubAlt} />}
					size="xs"
				/>
			</Link>
			<Line height="70" color="black" />
		</Container>
	);
};

export default SocialsBar;
