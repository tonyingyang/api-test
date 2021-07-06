import * as express from 'express';
import * as swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import * as helmet from 'helmet';
import * as cors from 'cors';
import api from './api';

const app = express();
app.use(cors());
app.use(helmet());
app.enable('trust proxy');

const PORT = 3000;
const HOST = 'localhost';

const swaggerDefinition = {
  info: {
    title: 'API Test Documentation',
    version: '1.0.0',
    description: 'API for simple string manipulation and income calculation.'
  },
  host: HOST + ':3000',
  schemes: ['http', 'https'],
  basePath: '/api-test',
}

const options = {
  swaggerDefinition,
  apis: [__dirname + '/api/controllers/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options);
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api-test', api);

const server = app.listen(PORT, () => {
  console.log('starting...')
  app.emit('ready');
});
module.exports = {
  server: server,
  api: app,
};