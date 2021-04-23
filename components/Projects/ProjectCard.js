import React from 'react';
import {
	Box,
	Image,
	Badge,
	useColorModeValue,
	Link,
	Text,
} from '@chakra-ui/react';
import { lightColors, darkColors } from '../../utils/colors';

const ProjectCard = ({ name, image, link, state, tech, description }) => {
	const tertiaryColor = useColorModeValue(
		lightColors.landingTertiaryTextColor,
		darkColors.landingTertiaryTextColor
	);

	const font = useColorModeValue(lightColors.font, darkColors.font);

	return (
		<Box
			maxW="sm"
			minH="100%"
			borderWidth="2px"
			borderRadius="lg"
			overflow="hidden"
			_hover={{ boxShadow: '0 0 11px rgba(33,33,33,.2)' }}
		>
			<Link href={link} target="_blank" style={{ textDecoration: 'none' }}>
				<Image boxSize="sm" src={image} alt="some image" />
				<Box p="6">
					<Box d="flex" alignItems="baseline">
						<Badge borderRadius="full" px="2" colorScheme="teal">
							{state}
						</Badge>
					</Box>
					<Box
						mt="1"
						fontFamily={font}
						fontWeight="semibold"
						as="h3"
						lineHeight="tight"
						fontSize="20px"
					>
						{name}
					</Box>
					<Box fontFamily={font} color={tertiaryColor} mb="10px">
						{tech}
					</Box>
					<Box>{description}</Box>
				</Box>
			</Link>
		</Box>
	);
};

export default ProjectCard;
