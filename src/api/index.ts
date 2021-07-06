import * as express from 'express';
import wordRouter from './routes/wordsRoute';
import incomeRouter from './routes/incomeRoute';

const api = express();

api.get('/health-check', (req, res) => {
  return res.status(200).end();
});

api.use('/words', wordRouter);
api.use('/income', incomeRouter);

export default api;
