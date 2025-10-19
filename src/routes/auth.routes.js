import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middlewares.js";
import {
  userLoginValidators,
  userRegisterValidators,
} from "../validators/index.js";

const router = Router();

router
  .route("/register")
  .post(userRegisterValidators(), validate, registerUser);

router.route("/login").post(userLoginValidators(), validate, loginUser);

export default router;
