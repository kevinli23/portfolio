import React from 'react';
import {
	Heading,
	Divider,
	Box,
	Image,
	VStack,
	HStack,
	Text,
	useColorMode,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react';
import { getColor } from '../../utils/colors';

const Education = () => {
	const { colorMode } = useColorMode();
	return (
		<>
			<Heading size="2xl" mb="10px" mt="3%">
				Education
			</Heading>
			<Divider />
			<div style={{ minHeight: '30px' }} />
			<Box>
				<HStack spacing="20px">
					<Image boxSize="100px" src="/uw.png" />
					<VStack align="flex-start" spacing="1px">
						<Heading size="lg">University of Waterloo</Heading>
						<Text color={getColor('landingSecondaryTextColor', colorMode)}>
							Honours Bachelor of Computer Science
						</Text>
						<Text color={getColor('landingTertiaryTextColor', colorMode)}>
							Sep 2018 - Apr 2023
						</Text>
					</VStack>
				</HStack>
				<UnorderedList mt="15px" ml="10%">
					<ListItem>3.88 Cumulative GPA</ListItem>
					<ListItem>89.19% Cumulative Average</ListItem>
					<ListItem>
						Teaching Assistant for Algebra for Honours Mathematics from September 2019
						to December 2019
					</ListItem>
					<ListItem>
						Courses: Algorithms, Computer Networks, Operating Systems, Data
						Structures, User Interfaces, Databases
					</ListItem>
				</UnorderedList>
			</Box>
		</>
	);
};

export default Education;
