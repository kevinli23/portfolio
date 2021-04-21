import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Loader from '../components/Loader';
import Landing from '../components/Landing';
import Body from '../components/Body';
import { useState } from 'react';

export default function Home() {
	const [loading, setLoading] = useState(true);
	return (
		<div className={styles.container}>
			<Head>
				<title>Kevin Li</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{loading ? (
				<Loader onFinish={() => setLoading(false)} />
			) : (
				<>
					<Landing />
					<Body />
				</>
			)}
		</div>
	);
}
