const APP_PATH = require('./app.path');
const META_CONFIG = require('./app.meta.config')(APP_PATH);

module.exports = {
	// Basic meta tags
	description: {
		name: 'description', content: META_CONFIG.DESCRIPTION
	},
	keyword: {
		name: 'keywords', content: META_CONFIG.KEYWORDS
	},
	viewport: {
		name: 'viewport', content: META_CONFIG.VIEWPORT
	},
	
	// OpenGraph tags
	'og:title': {
		property: 'og:title', content: META_CONFIG.TITLE
	},
	'og:description': {
		property: 'og:description', content: META_CONFIG.DESCRIPTION
	},
	'og:type': {
		property: 'og:type', content: META_CONFIG.TYPE
	},
	'og:url': {
		property: 'og:url', content: META_CONFIG.URL
	},
	'og:image': {
		property: 'og:image', content: META_CONFIG.IMAGE
	},
	
	// Twitter Card tags
	'twitter:card': {
		name: 'twitter:card', content: META_CONFIG.TWITTER_CARD
	},
	'twitter:title': {
		name: 'twitter:title', content: META_CONFIG.TITLE
	},
	'twitter:description': {
		name: 'twitter:description', content: META_CONFIG.DESCRIPTION
	},
	'twitter:image': {
		name: 'twitter:image', content: META_CONFIG.IMAGE
	},
	
	// Mobile app meta tags
	'theme-color': {
		name: 'theme-color', content: META_CONFIG.THEME_COLOR
	},
	'msapplication-TileColor': {
		name: 'msapplication-TileColor', content: META_CONFIG.MS_APPLICATION_TILE_COLOR
	},
	'msapplication-config': {
		name: 'msapplication-config', content: META_CONFIG.MS_APPLICATION_CONFIG
	},
	'apple-mobile-web-app-capable': {
		name: 'apple-mobile-web-app-capable', content: META_CONFIG.APPLE_MOBILE_WEB_APP_CAPABLE
	},
	'apple-mobile-web-app-status-bar-style': {
		name: 'apple-mobile-web-app-status-bar-style', content: META_CONFIG.APPLE_MOBILE_WEB_APP_STATUS_BAR_STYLE
	},
	'apple-mobile-web-app-title': {
		name: 'apple-mobile-web-app-title', content: META_CONFIG.APPLE_MOBILE_WEB_APP_TITLE
	}
};