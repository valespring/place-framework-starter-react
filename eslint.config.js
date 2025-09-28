// App Config
const { APP_CONFIG } = require('./app');
const ESLINT_CONFIG = require('@place-framework/place-webpack-preset/config').ESLINT_CONFIG;
const REACT_PLUGIN = require('eslint-plugin-react');
const REACT_HOOKS_PLUGIN = require('eslint-plugin-react-hooks');

const ADDL_CONFIG = [
	{
		files: [ '*.jsx', '**/*.jsx', '*.tsx', '**/*.tsx' ],
		plugins: {
			react: REACT_PLUGIN,
			'react-hooks': REACT_HOOKS_PLUGIN
		},
		rules: {
			...REACT_PLUGIN.configs.recommended.rules,
			...REACT_HOOKS_PLUGIN.configs.recommended.rules,
			"react/react-in-jsx-scope": "off", // Not needed in React 17+
			"react/prop-types": "off" // Using TypeScript for prop validation
		},
		settings: {
			react: {
				version: "detect"
			}
		}
	}
];

module.exports = [].concat(...ESLINT_CONFIG, ...ADDL_CONFIG);
