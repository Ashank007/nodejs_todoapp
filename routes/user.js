import express from 'express';
import {getAllUsers, getMyProfile,register,login,logout} from "../controllers/user.js";
import { isAuthenticed } from '../middlewares/auth.js';

const router = express.Router();

router.post("/new",register);
router.post("/login",login);

router.get("/logout",logout);
router.get("/me",isAuthenticed,getMyProfile);

export default router;