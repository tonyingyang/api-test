import { Router } from 'express';
import IncomeController from '../controllers/incomeController';

const incomeRouter = Router();
const incomeController = new IncomeController();

incomeRouter.get('/calculate-after-tax-income', incomeController.getAfterTaxIncome);
incomeRouter.get('/calculate-pre-tax-income-from-take-home', incomeController.getPreTaxIncome);

export default incomeRouter;
