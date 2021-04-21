import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { LayoutMain } from './styledItems';
import { Grid, GridItem } from '@chakra-ui/react';

const Layout = ({ left, main }) => {
	const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

	return (
		<>
			{isLargerThan1024 ? (
				<>
					<Grid h="min-content" w="100vw" templateColumns="repeat(8, 1fr)">
						<GridItem colSpan={1}>{left}</GridItem>
						<GridItem colSpan={6}>
							<LayoutMain>{main}</LayoutMain>
						</GridItem>
						<GridItem colSpan={1} />
					</Grid>
				</>
			) : (
				<LayoutMain>{main}</LayoutMain>
			)}
		</>
	);
};

export default Layout;