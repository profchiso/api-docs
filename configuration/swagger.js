const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
	info: {
		title: 'REST API for my k90', // Title of the documentation
		version: '1.0.0', // Version of the app
		description: 'This is the REST API for k90', // short description of the app
	},
	host: 'devlab.formelo.com', // the host or url of the app
	basePath: '/api', // the basepath of your endpoint
};

// options for the swagger docs
const options = {
	// import swaggerDefinitions
	swaggerDefinition,
	// path to the API docs
	apis: ['./docs/**/*.yaml'],
};
// initialize swagger-jsdoc
module.exports = swaggerJSDoc(options);
