// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors';
import initMiddleware from '../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
	// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
	Cors({
		// Only allow requests with GET, POST and OPTIONS
		methods: ['GET', 'POST', 'OPTIONS'],
	})
);

export default async function handler(req, res) {
	await cors(req, res);
	const r = await fetch(
		'https://engine.freerice.com/users/ab8381f7-d80e-4092-af9a-722907e7f989?_format=json'
	);
	const c = await r.json();
	res.status(200).json({ count: c.data.attributes.rice });
}
