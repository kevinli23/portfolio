import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Loader from '../components/Loader';
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
					<main className={styles.main}>
						<Button colorScheme="blue">Button</Button>
					</main>

					<footer className={styles.footer}>Powered by Coffee</footer>
				</>
			)}
		</div>
	);
}
