import express from 'express';
import { sendContactMessage } from '../controllers/contactUsController.js';

const router = express.Router();

router.post('/', sendContactMessage);

export default router;