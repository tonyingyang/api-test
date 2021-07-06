import Income from '../models/income';

class IncomeController {
  /**
   * @swagger
   * /income/calculate-after-tax-income:
   *   get:
   *     tags:
   *       - Income
   *     summary: Calculates the annual take home pay for a given salary in Australia
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: annualBaseSalary
   *         in: query
   *         required: true
   *         type: number
   *         description: The base salary in AUD
   *     responses:
   *       200:
   *         description: Successful after tax income calculation
   *         schema:
   *           type: object
   *           properties:
   *             baseSalary:
   *               type: number
   *             superanuation:
   *               type: number
   *             taxes:
   *               type: object
   *               properties:
   *                 income:
   *                   type: number
   *                 medicare:
   *                   type: number
   *                 total:
   *                   type: number
   *             postTaxIncome:
   *               type: number
   */
  getAfterTaxIncome = async (req, res) => {
    const { annualBaseSalary }: { annualBaseSalary: string } = req.query;
    try {
      let result = await Income.afterTax(parseFloat(annualBaseSalary));
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400);
    }
  }

  /**
   * @swagger
   * /income/calculate-pre-tax-income-from-take-home:
   *   get:
   *     tags:
   *       - Income
   *     summary: Calculates pre tax annual salary required for a desired take home pay
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: postTaxSalary
   *         in: query
   *         required: true
   *         type: number
   *         description: The desired after income tax in AUD
   *     responses:
   *       200:
   *         description: Successful after tax income calculation
   *         schema:
   *           type: object
   *           properties:
   *             baseSalary:
   *               type: number
   *             superanuation:
   *               type: number
   *             taxes:
   *               type: object
   *               properties:
   *                 income:
   *                   type: number
   *                 medicare:
   *                   type: number
   *                 total:
   *                   type: number
   *             postTaxIncome:
   *               type: number
   */
  getPreTaxIncome = async (req, res) => {
    const { postTaxSalary }: { postTaxSalary: string } = req.query;
    try {
      let result = await Income.preTax(parseFloat(postTaxSalary));
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400);
    }
  }
}

export default IncomeController;