import express from "express";
import {getUsers, Register, Login, Logout} from "../controllers/UserController";
import {verifyToken} from "../middleware/verifyToken";
import {refreshToken} from "../controllers/TokenController";

const router: express.Router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;