import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { Router } from "express";
import { ensureAdmin } from './middlewares/ensureAdmin';

export const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
 
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
