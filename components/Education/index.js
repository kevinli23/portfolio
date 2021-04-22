import React from 'react';
import { Heading, Divider, Box, Image } from '@chakra-ui/react';

const Education = () => {
	return (
		<>
			<Heading size="2xl" mb="10px" mt="3%">
				Education
			</Heading>
			<Divider />
			<div style={{ minHeight: '30px' }} />
			<Box>
				<Image
					boxSize="100px"
					src="https://kevinli23.github.io/me/static/media/uw.2e8e91d2.png"
				/>
			</Box>
		</>
	);
};

export default Education;
