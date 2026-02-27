const APP_PATH = require('./app.path');
const META_CONFIG = require('./app.meta.config')(APP_PATH);

module.exports = META_CONFIG.TITLE;