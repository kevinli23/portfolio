import React from 'react';
import { getColor } from '../../utils/colors';
import {
	Heading,
	useMediaQuery,
	Text,
	Box,
	Button,
	useDisclosure,
} from '@chakra-ui/react';

import ResumeModal from '../ResumeModal';

const Landing = () => {
	const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
	const { isOpen, onOpen, onClose } = useDisclosure();

	const bg = getColor('landingBGColor', 'light');
	const color = getColor('landingTextColor', 'light');
	const font = getColor('font', 'light');
	const tertiaryColor = getColor('landingTertiaryTextColor', 'light');

	return (
		<Box
			mw="100vw"
			mh="100vh"
			w="100vw"
			h="100vh"
			backgroundColor={bg}
			color={color}
			d="flex"
			flexDir="column"
			justifyContent="center"
			alignItems="center"
			fontFamily={'Calibre'}
			bgImage={isLargerThan1024 ? "url('/bg.png')" : ''}
			bgSize="cover"
			bgRepeat="no-repeat"
			zIndex="10"
		>
			<Button
				position="absolute"
				right="2%"
				top="1%"
				variant="solid"
				colorScheme="blue"
				fontFamily="SF Mono"
				fontWeight="bold"
				onClick={onOpen}
			>
				Resume
			</Button>
			<Box
				d="flex"
				flexDir="column"
				alignItems="flex-start"
				style={{
					maxWidth: '450px',
				}}
				padding="15px"
				mb="60px"
				backgroundColor={bg}
			>
				<Text color={tertiaryColor} fontSize="lg">
					👋 Nice to meet ya, I'm
				</Text>
				<Heading mb="10px" color="black" size="4xl">
					Kevin Li
				</Heading>
				<Heading fontFamily={font} color={tertiaryColor} size="lg" textAlign="left">
					4A CS @ UWaterloo
				</Heading>
				<Text color="black" fontSize="lg" textAlign="left" mt="10px">
					Professional software builder & destroyer.
				</Text>
			</Box>
			<ResumeModal isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default Landing;
