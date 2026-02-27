const URI = 'https://website.com';

module.exports = (source) => {
	return {
		// Basic SEO
		URL: URI,
		DESCRIPTION: 'A React starter pack for the PLACE SCSS framework.',
		KEYWORDS: 'place framework, react, scss, starter, webpack',
		TITLE: 'PLACE Framework Starter - React',
		IMAGE: `${URI}/${source.output}/og.jpg`,
		TYPE: 'website',
		TWITTER_CARD: 'summary',
		
		// Mobile App Meta
		VIEWPORT: 'width=device-width, initial-scale=1',
		THEME_COLOR: '#ffffff',
		MS_APPLICATION_TILE_COLOR: '#da532c',
		MS_APPLICATION_CONFIG: '/browserconfig.xml',
		APPLE_MOBILE_WEB_APP_CAPABLE: 'yes',
		APPLE_MOBILE_WEB_APP_STATUS_BAR_STYLE: 'black-translucent',
		APPLE_MOBILE_WEB_APP_TITLE: 'PLACE Framework Starter - React'
	};
};