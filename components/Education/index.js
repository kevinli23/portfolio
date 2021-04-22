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
					<Image
						boxSize="100px"
						src="https://kevinli23.github.io/me/static/media/uw.2e8e91d2.png"
					/>
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
					<ListItem>3.86 Cumulative GPA</ListItem>
					<ListItem>88.78% Cumulative Average</ListItem>
					<ListItem>
						Teaching Assistant for Algebra for Honours Mathematics from September 2019
						to December 2019
					</ListItem>
				</UnorderedList>
			</Box>
		</>
	);
};

export default Education;
