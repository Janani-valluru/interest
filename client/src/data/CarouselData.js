export const data = [
	{
		title: 'Private',
		description:
			'Safe and secure neighbourhood as it allows only verified neighbours',
		image: './assets/private.png',
	},
	{
		title: 'Community Groups',
		description: 'Allows you to bring people together of similar interests from your local community',
		image: './assets/message.png',
	},
	{
		title: 'Explore Nearby',
		description: 'Find the list of best nearby services and businesses around you',
		image: './assets/location.png',
	},
	{
		title: 'Trusted',
		description: 'A community built by you and your neighbours to build the stronger and safer communities..',
		image: './assets/trusted.png',
	},
	{
		title: 'Secure',
		description: 'An environment designed for you and your neighbours where everything you share on Nybo stays just between you and your neighbours.',
		image: './assets/secure.png',
	}
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
