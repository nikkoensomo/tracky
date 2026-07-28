import express from 'express';
import { 
    createExpense 
} from '../controllers/transactionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createExpense);

export default router;