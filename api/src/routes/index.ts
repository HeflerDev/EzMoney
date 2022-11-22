import express from "express";
import UserController from "../controllers/UserController/UserController";
import TokenController from "../controllers/TokenController/TokenController";
import {verifyToken} from "../middleware/verifyToken";

const router: express.Router = express.Router();
const userController: UserController = new UserController();
const tokenController: TokenController = new TokenController();

router.get('/users', verifyToken, userController.Users);
router.post('/users', userController.Register);
router.post('/login', userController.Login);
router.delete('/logout', userController.Logout);
router.get('/token', tokenController.RefreshToken);

export default router;