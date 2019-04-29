const path = require('path');

/**
 * Provide absolute paths for where a generated `html` & `pdf`
 * files will be created.
 * 
 * `path.resolve` takes in a relative file path & returns the 
 * absolute path.
 */
const buildPaths = {
	buildPathHtml: path.resolve('./build.html'),
	buildPathPdf: path.resolve('./build.pdf')
};

module.exports = buildPaths;
