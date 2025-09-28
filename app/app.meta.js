const APP_META_CONFIG = require('./app.meta.config');

module.exports = {
	viewport: APP_META_CONFIG.viewport,
	'theme-color': APP_META_CONFIG.themeColor,
	'msapplication-TileColor': APP_META_CONFIG.msApplicationTileColor,
	'msapplication-config': APP_META_CONFIG.msApplicationConfig,
	'apple-mobile-web-app-capable': APP_META_CONFIG.appleMobileWebAppCapable,
	'apple-mobile-web-app-status-bar-style': APP_META_CONFIG.appleMobileWebAppStatusBarStyle,
	'apple-mobile-web-app-title': APP_META_CONFIG.appleMobileWebAppTitle
};