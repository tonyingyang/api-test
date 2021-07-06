import Word from '../models/word';

class WordController {
  /**
   * @swagger
   * /words/reverse-words:
   *   get:
   *     tags:
   *       - Words
   *     summary: Reverses the letters of each word in a sentence
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: sentence
   *         in: query
   *         required: true
   *         type: string
   *         description: Sentence for word reversal
   *     responses:
   *       200:
   *         description: Successful reversal
   *         schema:
   *           type: string
   */
  reverseWords = async (req, res) => {
    const { sentence }: { sentence: string } = req.query;
    try {
      let reversed = await Word.reverse(sentence);
      return res.status(200).send(reversed.join(' '));
    } catch (err) {
      return res.status(400);
    }
  }

  /**
   * @swagger
   * /words/sort-words:
   *   get:
   *     tags:
   *       - Words
   *     summary: Sorts the letters of each word in a sentence
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: sentence
   *         in: query
   *         required: true
   *         type: string
   *         description: Sentence for word sorting
   *     responses:
   *       200:
   *         description: Successful sort
   *         schema:
   *           type: string
   */
  sortWords = async (req, res) => {
    const { sentence }: { sentence: string } = req.query;
    try {
      let sorted = await Word.sort(sentence);
      return res.status(200).send(sorted.join(' '));
    } catch (err) {
      return res.status(400);
    }
  }
}

export default WordController;
