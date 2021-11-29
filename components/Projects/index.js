import React from 'react';
import { Heading, Divider, Wrap, WrapItem, Box } from '@chakra-ui/react';
import { PROJECTS } from '../../utils/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
	return (
		<>
			<Heading size="2xl" style={{ marginBottom: '10px', marginTop: '3%' }}>
				Projects
			</Heading>
			<Divider />
			<div style={{ minHeight: '30px' }} />
			<Wrap spacing="50px" justify="center">
				{PROJECTS.map((project) => (
					<WrapItem key={project.name}>
						<ProjectCard {...project} />
					</WrapItem>
				))}
			</Wrap>
		</>
	);
};

export default Projects;
