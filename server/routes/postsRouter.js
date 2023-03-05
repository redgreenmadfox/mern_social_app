import express from 'express';
import PostsController from '../controllers/posts.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/upload.middleware.js';

const router = express.Router();
const postsController = new PostsController();

router.post('/', authMiddleware, upload.single('picture'), postsController.createPost);

router.get('/', authMiddleware, postsController.getAllPosts);
router.get('/:userId/posts', authMiddleware, postsController.getUserPosts);

router.patch('/:id/like', authMiddleware, postsController.likePost);

export default router;