import express from 'express';
import {newTask,getMyTask,updateTask,DeleteTask} from "../controllers/task.js";
import {isAuthenticed} from "../middlewares/auth.js";
const router = express.Router();

router.post("/new",isAuthenticed,newTask);

router.get("/my",isAuthenticed,getMyTask);

router.route("/:id").put(isAuthenticed,updateTask).delete(isAuthenticed,DeleteTask);

export default router;