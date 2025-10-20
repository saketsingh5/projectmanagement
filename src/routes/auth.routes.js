import { Router } from "express";
import {
  loginUser,
  logOutUser,
  registerUser,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middlewares.js";
import {
  userLoginValidators,
  userRegisterValidators,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router
  .route("/register")
  .post(userRegisterValidators(), validate, registerUser);

router.route("/login").post(userLoginValidators(), validate, loginUser);

//Secure Route
router.route("/logout").post(verifyJWT, logOutUser);

export default router;
