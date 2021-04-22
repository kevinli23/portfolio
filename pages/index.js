import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Loader from '../components/Loader';
import Landing from '../components/Landing';
import Body from '../components/Body';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Kevin Li</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Landing />
			<Body />
		</div>
	);
}
