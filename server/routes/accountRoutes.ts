import express from 'express';
import {
    createAccount,
    getAccountDetails,
} from '../controllers/accountController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createAccount);
router.get('/:id', protect, getAccountDetails);

export default router;