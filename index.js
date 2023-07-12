const swaggerAutogen = require('swagger-autogen')();
const {
    npm_package_version,
    npm_package_name,
    npm_package_description,
    API_URL
} = require('./src/helpers/env')
const doc = {
  info: {
    version: npm_package_version,      // by default: '1.0.0'
    title: npm_package_name,        // by default: 'REST API'
    description: npm_package_description,  // by default: ''
  },
  host: API_URL,      // by default: 'localhost:3000'
  basePath: '/',  // by default: '/'
  schemes: ['http', 'https'],   // by default: ['http']
  consumes: ['application/json'],  // by default: ['application/json']
  produces: ['application/json'],  // by default: ['application/json']
  tags: [[        // by default: empty Array
    {
      name: 'Example Controller',         // Tag name
      description: 'Example Controller',  // Tag description
    },
    // { ... }
  ]],
  securityDefinitions: {},  // by default: empty object
  definitions: {},          // by default: empty object (Swagger 2.0)
  components: {}            // by default: empty object (OpenAPI 3.x)
};
const outputFile = './src/helpers/swagger-output.json';
const endpointsFiles = ['./express.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc)
.then((result) => {
  require('./express.js')
});