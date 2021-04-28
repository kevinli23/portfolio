import React from 'react';
import { getColor } from '../../utils/colors';
import {
	Button,
	useColorMode,
	Heading,
	Img,
	useMediaQuery,
	Link,
	Text,
	Box,
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import { Row } from './styledItems';

const Landing = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

	const bg = getColor('landingBGColor', colorMode);
	const color = getColor('landingTextColor', colorMode);
	const font = getColor('font', colorMode);
	const secondaryColor = getColor('landingSecondaryTextColor', colorMode);
	const tertiaryColor = getColor('landingTertiaryTextColor', colorMode);
	const highlightColor = getColor('landingHighlight', colorMode);

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
			textAlign="center"
			fontFamily={font}
			bgImage={isLargerThan1024 ? "url('/bg.png')" : ''}
			bgSize="cover"
			bgRepeat="no-repeat"
			zIndex="10"
		>
			<Text color={highlightColor} fontSize="lg">
				Hey, I'm
			</Text>
			<Heading
				style={{ marginBottom: '3vh', marginTop: '1vh', fontFamily: font }}
				size="4xl"
			>
				Kevin Li
			</Heading>
			<Heading fontFamily={font} mb="3vh" color={secondaryColor} size="lg">
				3B Computer Science @ UWaterloo
			</Heading>
			<Text color={tertiaryColor} fontSize="lg">
				I enjoy building and breaking things
			</Text>
			{!isLargerThan1024 && (
				<Row
					style={{
						margin: '30px',
						justifyContent: 'space-between',
						minWidth: '200px',
					}}
				>
					<Link href="https://www.linkedin.com/in/kevinli230/" target="_blank">
						<FaLinkedin size="3em" />
					</Link>

					<Link href="https://github.com/kevinli23" target="_blank">
						<FaGithub size="3em" />
					</Link>
					<Link
						href="https://drive.google.com/file/d/1FrYJQ0phN6fsVeWXSGkt6QZwLXkSPEGB/view?usp=sharing"
						target="_blank"
					>
						<FaFilePdf size="3em" />
					</Link>
				</Row>
			)}
			{isLargerThan1024 && <div style={{ minHeight: '20vh' }} />}
			<Button
				style={{
					position: 'absolute',
					top: '10px',
					right: '10px',
				}}
				variant="ghost"
				onClick={toggleColorMode}
			>
				{colorMode === 'light' ? <FaMoon /> : <FaSun />}
			</Button>
		</Box>
	);
};

export default Landing;
