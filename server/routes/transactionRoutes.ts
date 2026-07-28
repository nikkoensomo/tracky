import express from 'express';
import { 
    createExpense,
    createIncome
} from '../controllers/transactionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/expense', protect, createExpense);
router.post('/income', protect, createIncome);

export default router;