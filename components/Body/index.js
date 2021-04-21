import React from 'react';
import Layout from './Layout';
import SocialsBar from '../SocialsBar';
import About from '../About';

const Body = () => {
	return (
		<Layout
			left={<SocialsBar />}
			main={
				<>
					<About />
				</>
			}
		/>
	);
};

export default Body;
