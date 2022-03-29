import { CreateTagController } from './src/controllers/CreateTagController';
import { CreateUserController } from './src/controllers/CreateUserController';
import { Router } from "express";
import { ensureAdmin } from './src/middlewares/ensureAdmin';

export const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
 
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
