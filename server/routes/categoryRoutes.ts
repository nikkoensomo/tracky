import express from 'express';
import { 
    createCategory,
    getUserCategories,
} from '../controllers/categoryController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createCategory);
router.get('/', protect, getUserCategories);

export default router;