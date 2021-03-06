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
				targets: '#pokeball',
				duration: 300,
				easing: 'easeInOutQuart',
				opacity: 1,
			})
			.add({
				targets: 'path#pokeballdot',
				easing: 'easeInOutQuart',
				delay: 0,
				fill: '#ff3d00',
			})
			.add({
				targets: '.loader',
				duration: 0,
				keyframes: [
					{ rotateZ: -7 },
					{ rotateZ: 7 },
					{ rotateZ: -5 },
					{ rotateZ: 5 },
					{ rotateZ: -2 },
					{ rotateZ: 2 },
					{ rotateZ: -1 },
					{ rotateZ: 0 },
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
		animate();
	}, []);

	return (
		<div
			className={'loader'}
			style={{
				backgroundColor: '#f5f5f5',
			}}
		>
			<PokeballIcon />
		</div>
	);
};

export default Loader;
