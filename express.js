const {
    npm_package_name,
    npm_package_version,
    PORT,
    NODE_ENV
} = require('./src/helpers/env')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const swaggerDocs = require("./src/helpers/swagger-output.json")
const swaggerUi = require("swagger-ui-express");
const logger = require('morgan')

const exampleRoute = require('./src/routes/example.route');
const { failed } = require('./src/helpers/response');

const app = express();
const allowedOrigin = ['http://localhost', 'http://localhost:3000']

app.use(cors({
  origin: allowedOrigin
}));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
	})
  );
  app.use(xss());
  app.use(bodyParser.json());
  
  if (NODE_ENV === 'development') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    // request logger
    app.use(logger("dev"));
  }

// access folder public
app.use(express.static('public'));

app.get("/", (req, res) => {
	res.json({
    app_name: npm_package_name,
    app_version: npm_package_version,
		message: "Hello World",
	});
});

app.use("/example", exampleRoute)

// Not Found
app.use((req, res) => {
  failed(res, {
    code: 404,
    error: 'Not Found',
  });
});

const APP_PORT = PORT || 4000
app.listen(APP_PORT, () => {
  console.log(`Service running on port ${APP_PORT}`)
})