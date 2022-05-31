const express = require('express');
const app = express();

// Swagger Docs
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res, next) => {
	res.send('Hello World');
});

app.listen(5000, () => {
	console.log('Running on 5000');
});
