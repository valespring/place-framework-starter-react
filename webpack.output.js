const { APP_CONFIG } = require('./app');

module.exports = {
	path: APP_CONFIG.PATH.OUTPUT,
	css: APP_CONFIG.OUTPUT.CSS,
	js: APP_CONFIG.OUTPUT.JS
};