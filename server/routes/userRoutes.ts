import express from 'express';
import { 
    getAllUsers,
    getUserById,
    updatedUserById,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updatedUserById);

export default router;