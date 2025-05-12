import { Router } from 'express';
import { getUserController, signInController, signUpController } from '../controller/AuthController.js';
import { userValidation } from '../middleware/userValidation.js';


const userRouter = Router();

userRouter.post("/signin", signInController);
userRouter.post("/signup", signUpController);
userRouter.get("/user", userValidation, getUserController);

export default userRouter;