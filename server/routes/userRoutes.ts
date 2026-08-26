import express from 'express';
import { 
    getAllUsers,
    getUserById,
    updatedUserById,
    getLoggedInUser,
    createUserNickname,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllUsers);
router.put('/', protect, createUserNickname);
router.get('/me', protect, getLoggedInUser);
router.get('/:id', getUserById);
router.put('/:id', updatedUserById);

export default router;