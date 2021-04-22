import React from 'react';
import { Heading, Divider, Spacer } from '@chakra-ui/react';
import { EXPERIENCE } from '../../utils/constants';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
	return (
		<>
			<Heading size="2xl" mb="10px" mt="3%">
				Experience
			</Heading>
			<Divider />
			<div style={{ minHeight: '30px' }} />
			{EXPERIENCE.map((entry) => (
				<ExperienceCard {...entry} />
			))}
		</>
	);
};

export default Experience;
