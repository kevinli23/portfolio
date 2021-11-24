import React from 'react';
import Layout from './Layout';
import SocialsBar from '../SocialsBar';
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';
import Education from '../Education';

const Body = () => {
	return (
		<Layout
			left={<SocialsBar />}
			main={
				<>
					<About />
					<Experience />
					<Projects />
					<Education />
				</>
			}
		/>
	);
};

export default Body;
