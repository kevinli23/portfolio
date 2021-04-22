export const EXPERIENCE = [
	{
		company: 'Manulife - Manulife Technology',
		duration: 'Jan 2021 - Apr 2021',
		title: 'Full Stack Engineer',
		items: [
			'Developed new features, expanded units tests and fixed bugs using React, Node.js, MongoDB and GraphQL to an internal tool',
			'Reduced start-up load times by 11% by employing code-splitting and removing redundant dependencies',
			'Implemented SSO and session management using Azure Active Directory',
			'Created a suite of smoke/load tests using Artillery',
		],
		image: '/manulife.png',
	},
	{
		company: 'ODAIA Intelligence',
		duration: 'May 2020 - Aug 2020',
		title: 'Data Scientist',
		items: [
			'Developed a regression model that accurately estimated the original volume given an aggregated volume and various features',
			'Utilized Phased and Time LSTMs with Keras to develop predictive models with time series data',
			'Created scripts using Pandas and Numpy that created simulated test data based on real data; this provided a testing benchmark for model creation, hyperparameter optimization and testing algorithm limitations',
		],
		image: '/odaia.png',
	},
	{
		company: 'Intelex Technologies',
		duration: 'May 2019 - Aug 2019',
		title: 'Software Developer',
		items: [
			'Assisted in the development of a framework for storing geolocations using C#; prototyped in a SPA using React',
			'Worked in two-week sprints with React, JavaScript, C# and SQL to fix urgent platform defects and refactor legacy code',
		],
		image: '/intelex.png',
	},
	{
		company: 'Toronto District School Board',
		duration: 'Jul 2018',
		title: 'Robotics Mentor',
		items: [
			'Taught students’ the fundamentals of programming with an application heavy curriculum using Blockly, Dash and Dot',
		],
		image: '/tdsb.png',
	},
];

export const PROJECTS = [
	{
		name: 'Playbak',
		image: 'https://playbak-team.github.io/static/media/landing1.3084bd84.JPG',
		link: 'https://playbak-team.github.io/',
		state: '2021 - In Development',
		tech: 'React and Electron',
		description:
			'A desktop application tool to assist with the pains of online school. Comes equipt with a kanban board and an automated playback speed controller that automatically checks for pauses in video lectures and fast forwards it for you!',
	},
	{
		name: 'Hand Sign Ninjutsu Simulator',
		image: 'https://kevinli23.github.io/me/static/media/image5.4b804766.jpg',
		link:
			'https://devpost.com/software/ar-voice-control-and-ml-hand-sign-ninjutsu-battle-simulator',
		state: 'HTN 2019',
		tech: 'Python and React',
		description:
			'Built at Hack the North 2019, where our team used handsign recognition and our voices to simulate ninjutsu from the anime Naruto in a one versus one AR battle',
	},
	{
		name: 'World Archives',
		image:
			'https://kevinli23.github.io/me/static/media/globalarchives.3b64ba77.png',
		link: 'https://github.com/kevinli23/worldarchives',
		state: '2019',
		tech: 'React and Firebase',
		description:
			'A Pub/Sub data aggregation service that archives news data in real-time according to client subscriptions. Implemented content classification and sentiment analysis with GCP. Displayed with a React frontend.',
	},
];
