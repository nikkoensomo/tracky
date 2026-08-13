import express from 'express';
import {
    createAccount,
    getAccountDetails,
    getUserAccounts,
    getTotalBalance,
} from '../controllers/accountController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createAccount);
router.get('/total-balance', protect, getTotalBalance);
router.get('/', protect, getUserAccounts);
router.get('/:id', protect, getAccountDetails);

export default router;