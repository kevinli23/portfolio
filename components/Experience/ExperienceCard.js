import React from 'react';
import {
	Box,
	Text,
	Heading,
	UnorderedList,
	ListItem,
	Spacer,
	useMediaQuery,
	useColorMode,
} from '@chakra-ui/react';
import { Row, Column, StyledLink } from './styledItems';

const ExperienceCard = ({ company, duration, title, items, link }) => {
	const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

	return (
		<Box overflow="hidden" borderRadius="lg" maxW="100%" fontFamily="Calibre">
			<Column style={{ margin: '20px' }}>
				<Row style={{ alignItems: 'center' }}>
					<Column>
						<Heading fontFamily="Calibre" size="md">
							{title}{' '}
							<StyledLink inputColor="rgb(42, 179, 198)" target="_blank" href={link}>
								@ {company}
							</StyledLink>
						</Heading>
					</Column>
					<Spacer />
					{isLargerThan1024 && <Text>{duration}</Text>}
				</Row>
				{!isLargerThan1024 && <Text>{duration}</Text>}
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
