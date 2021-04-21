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
} from '@chakra-ui/react';
import { Row, Column } from './styledItems';

const ExperienceCard = ({ company, duration, title, items, image }) => {
	const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
	return (
		<Box overflow="hidden" borderRadius="lg" maxW="87%">
			<Column style={{ margin: '20px' }}>
				<Row style={{ alignItems: 'center' }}>
					<Img
						style={{ marginRight: '15px' }}
						src={image}
						boxSize={isLargerThan1024 ? '50px' : '40px'}
					/>
					<Column>
						<Heading size="md">{title}</Heading>
						<Text>{company}</Text>
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
