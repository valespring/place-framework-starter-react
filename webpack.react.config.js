// App Config
const { APP_CONFIG, APP_META, APP_TITLE } = require('./app');
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, APP_CONFIG.PATH.ENTRY)
	},
	stats: {
		loggingDebug: ['sass-loader']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(png|jpe?g|gif|webm|mp4|mov|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: APP_CONFIG.PATH.OUTPUT,
					esModule: false
				}
			}
		]
	},
	plugins: [
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
		},
		extensions: [
			'.*',
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.json',
			'.scss'
		]
	},
	optimization: {
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					priority: -10,
					chunks: 'all'
				}
			}
		}
	}
};