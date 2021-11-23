import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Loader from '../components/Loader';
import Landing from '../components/Landing';
import Body from '../components/Body';
import { useState } from 'react';

export default function Home({ data }) {
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
					<Body data={data} />
				</>
			)}
		</div>
	);
}

// export async function getStaticProps() {
// 	const res = await fetch(
// 		`https://engine.freerice.com/users/ab8381f7-d80e-4092-af9a-722907e7f989?_format=json`
// 	);
// 	const data = await res.json();

// 	if (!data) {
// 		return {
// 			notFound: true,
// 		};
// 	}

// 	return {
// 		props: { data }, // will be passed to the page component as props
// 	};
// }
