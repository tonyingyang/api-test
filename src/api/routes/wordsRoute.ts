import { Router } from 'express';
import WordController from '../controllers/wordController';

const wordRouter = Router();
const wordController = new WordController();

wordRouter.get('/reverse-words', wordController.reverseWords);
wordRouter.get('/sort-words', wordController.sortWords);

export default wordRouter;
