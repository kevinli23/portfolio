import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import { EXPERIENCE } from '../../utils/constants';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
	return (
		<>
			<Heading size="2xl" mb="10px" mt="3%">
				Experience
			</Heading>
			<Box
				style={{
					borderTop: '1px solid black',
				}}
			/>
			<div style={{ minHeight: '30px' }} />
			{EXPERIENCE.map((entry) => (
				<ExperienceCard key={entry.company + entry.title} {...entry} />
			))}
		</>
	);
};

export default Experience;
