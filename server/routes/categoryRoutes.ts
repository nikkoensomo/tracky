import express from 'express';
import { 
    createCategory 
} from '../controllers/categoryController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createCategory);

export default router;