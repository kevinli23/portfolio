import React from 'react';
import {
	Box,
	Img,
	Text,
	Heading,
	UnorderedList,
	ListItem,
	Spacer,
	useMediaQuery,
	useColorMode,
} from '@chakra-ui/react';
import { Row, Column } from './styledItems';
import { getColor } from '../../utils/colors';

const ExperienceCard = ({ company, duration, title, items, image }) => {
	const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
	const { colorMode } = useColorMode();
	const tertiaryColor = getColor('landingTertiaryTextColor', colorMode);
	const font = getColor('font', colorMode);

	return (
		<Box overflow="hidden" borderRadius="lg" maxW="90%">
			<Column style={{ margin: '20px' }}>
				<Row style={{ alignItems: 'center' }}>
					<Img
						style={{ marginRight: '15px' }}
						src={image}
						boxSize={isLargerThan1024 ? '50px' : '40px'}
					/>
					<Column>
						<Heading fontFamily={font} size="md">
							{title}
						</Heading>
						<Text fontFamily={font} color={tertiaryColor}>
							{company}
						</Text>
					</Column>
					<Spacer />
					{isLargerThan1024 && <Text>{duration}</Text>}
				</Row>
				<UnorderedList
					spacing="1.5"
					style={{ paddingLeft: '2%', marginTop: '10px' }}
				>
					{items.map((item) => (
						<ListItem>{item}</ListItem>
					))}
				</UnorderedList>
			</Column>
		</Box>
	);
};

export default ExperienceCard;
