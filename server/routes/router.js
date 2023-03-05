import express from 'express';
import authRouter from './authRouter.js'
import postsRouter from './postsRouter.js';
import usersRouter from './usersRouter.js';

const router = express.Router();

router.use('/auth', authRouter)
router.use('/users', usersRouter)
router.use('/posts', postsRouter)

export default router;