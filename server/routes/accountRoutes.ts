import express from 'express';
import {
    createAccount,
    getAccountDetails,
    getUserAccounts,
} from '../controllers/accountController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createAccount);
router.get('/:id', protect, getAccountDetails);
router.get('/', protect, getUserAccounts);

export default router;