import express from 'express';
import AuthController from '../controllers/auth.controller.js';
import { upload } from '../middlewares/upload.middleware.js';

const router = express.Router();
const authController = new AuthController();

router.post('/register', upload.single('picture'), authController.register)
router.post('/login', authController.login);

export default router;
