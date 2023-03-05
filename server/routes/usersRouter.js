import express from 'express';
import UsersController from '../controllers/users.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();
const usersController = new UsersController();

router.get('/:id', authMiddleware, usersController.getUser);
router.get('/:id/friends', authMiddleware, usersController.getUserFriends);

router.patch('/:id/:friendId', authMiddleware, usersController.addRemoveFriend);

export default router;