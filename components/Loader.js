import React, { useEffect } from 'react';
import anime from 'animejs';
import PokeballIcon from './PokeballIcon';

const Loader = ({ onFinish }) => {
	const animate = () => {
		const loader = anime.timeline({
			complete: () => onFinish(),
		});

		loader
			.add({
				targets: '.loader',
				delay: 800,
				duration: 1000,
				keyframes: [
					{ translateX: -30 },
					{ translateX: 30 },
					{ translateX: -20 },
					{ translateX: 20 },
					{ translateX: -10 },
					{ translateX: 10 },
					{ translateX: -5 },
					{ translateX: 5 },
					{ translateX: -2 },
					{ translateX: 2 },
					{ translateX: 0 },
					{ translateX: 0 },
				],
				easing: 'easeInOutQuart',
			})
			.add({
				targets: '#pokeball',
				duration: 300,
				easing: 'easeInOutQuart',
				opacity: 0,
				scale: 0.1,
			});
	};

	useEffect(() => {
		console.log('animate!');
		animate();
	}, []);

	return (
		<div className="loader">
			<PokeballIcon />
		</div>
	);
};

export default Loader;
