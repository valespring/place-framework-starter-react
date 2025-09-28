const APP_PATH = require('./app.path');
const METAS = require('./app.meta');

module.exports = {
	PATH: {
		SRC: `${APP_PATH.src}`,
		SRC_ASSETS: `${APP_PATH.src}/assets`,
		SRC_IMAGES: `${APP_PATH.src}/assets/images`,
		SRC_COMPONENTS: `${APP_PATH.src}/components`,
		SRC_VIEWS: `${APP_PATH.src}/views`,
		SRC_SCSS: `${APP_PATH.src}/scss`,
		OUTPUT: `${APP_PATH.output}`,
		ENTRY: `${APP_PATH.src}/main.tsx`,
		TEMPLATE: `${APP_PATH.src}/public/index.html`,
		COMPONENT: `${APP_PATH.src}/views`
	},
	OUTPUT: {
		CSS: '[name].css',
		JS: '[name].[contenthash].js'
	},
	METAS
};