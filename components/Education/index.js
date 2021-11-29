import React from 'react';
import {
	Heading,
	Box,
	VStack,
	HStack,
	Text,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react';
import { getColor } from '../../utils/colors';

const Education = () => {
	return (
		<>
			<Heading size="2xl" mb="10px" mt="3%">
				Education
			</Heading>
			<Box
				style={{
					borderTop: '1px solid black',
				}}
			/>
			<div style={{ minHeight: '30px' }} />
			<Box fontFamily="Calibre">
				<HStack spacing="20px">
					<VStack align="flex-start" spacing="1px">
						<Heading size="lg">University of Waterloo</Heading>
						<Text
							fontSize="20px"
							color={getColor('landingSecondaryTextColor', 'light')}
						>
							Honours Bachelor of Computer Science
						</Text>
						<Text
							color={getColor('landingTertiaryTextColor', 'light')}
							fontSize="20px"
						>
							Sep 2018 - Apr 2023
						</Text>
					</VStack>
				</HStack>
				<UnorderedList mt="15px" fontSize="20px">
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
