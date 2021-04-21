import React from 'react';
import Layout from './Layout';
import SocialsBar from '../SocialsBar';
import About from '../About';
import Experience from '../Experience';

const Body = () => {
	return (
		<Layout
			left={<SocialsBar />}
			main={
				<>
					<About />
					<Experience />
				</>
			}
		/>
	);
};

export default Body;
