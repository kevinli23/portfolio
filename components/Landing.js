import React from 'react';
import { lightColors, darkColors } from '../utils/colors';
import {
	Button,
	useColorMode,
	useColorModeValue,
	Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const Main = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.color};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: Helvetica, sans-serif;
`;

const Landing = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bg = useColorModeValue(
		lightColors.landingBGColor,
		darkColors.landingBGColor
	);
	const color = useColorModeValue(
		lightColors.landingTextColor,
		darkColors.landingTextColor
	);
	const secondaryColor = useColorModeValue(
		lightColors.landingSecondaryTextColor,
		darkColors.landingSecondaryTextColor
	);

	return (
		<Main bgColor={bg} color={color}>
			<Heading style={{ marginBottom: '5vh' }} size="4xl">
				Kevin Li
			</Heading>
			<Heading color={secondaryColor} size="lg">
				3B Computer Science @ UWaterloo
			</Heading>
			<Button
				style={{
					position: 'absolute',
					top: '10px',
					right: '10px',
				}}
				leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				variant="ghost"
				onClick={toggleColorMode}
			>
				{colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
			</Button>
		</Main>
	);
};

export default Landing;
