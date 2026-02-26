// App Config
const { APP_CONFIG, APP_META, APP_TITLE } = require('./app');
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, APP_CONFIG.PATH.ENTRY)
	},
	module: {
		rules: [
			// TypeScript loader (React-specific, no Vue suffix handling)
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			// React JSX loader
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	plugins: [
		// Framework-specific HtmlWebpackPlugin
		new HtmlWebpackPlugin({
			template: APP_CONFIG.PATH.TEMPLATE,
			alwaysWriteToDisk: true,
			favicon: APP_CONFIG.PATH.FAVICON,
			title: APP_TITLE,
			meta: APP_META,
			minify: {
				removeComments: false,
				collapseWhitespace: true
			}
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, APP_CONFIG.PATH.SRC),
			'@a': path.resolve(__dirname, APP_CONFIG.PATH.SRC_ASSETS),
			'@c': path.resolve(__dirname, APP_CONFIG.PATH.SRC_COMPONENTS),
			'@img': path.resolve(__dirname, APP_CONFIG.PATH.SRC_IMAGES),
			'@scss': path.resolve(__dirname, APP_CONFIG.PATH.SRC_SCSS),
			'@views': path.resolve(__dirname, APP_CONFIG.PATH.SRC_VIEWS),
		}
	}
};