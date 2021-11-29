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
		<Link
			href={link}
			target="_blank"
			minH="100%"
			d="flex"
			flexDir="column"
			style={{ textDecoration: 'none' }}
		>
			<Box
				maxW="sm"
				flex="1"
				borderWidth="2px"
				borderRadius="lg"
				borderColor="#c4cace"
				overflow="hidden"
				_hover={{ boxShadow: 'outline' }}
			>
				<Image boxSize="sm" src={image} alt="some image" />
				<Box p="6">
					<Box d="flex" alignItems="baseline">
						<Badge borderRadius="full" px="2" colorScheme="teal">
							{state}
						</Badge>
					</Box>
					<Box
						mt="1"
						fontFamily="Calibre"
						fontWeight="semibold"
						as="h3"
						lineHeight="tight"
						fontSize="25px"
						mb="-5px"
					>
						{name}
					</Box>
					<Box fontFamily="Calibre" color={tertiaryColor} mb="10px">
						{tech}
					</Box>
					<Box mh="100%">{description}</Box>
				</Box>
			</Box>
		</Link>
	);
};

export default ProjectCard;
