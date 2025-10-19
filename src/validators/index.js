import { body } from "express-validator";

const userRegisterValidators = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is Invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLowercase()
      .withMessage("user must be lower case")
      .isLength({ min: 3 })
      .withMessage("username must be at least 3 characters"),
    body("password").trim().notEmpty().withMessage("password is required"),
    body("fullName").optional(),
  ];
};

const userLoginValidators = () => {
  return [
    body("email").optional().isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("Password is required"),
  ];
};

export { userRegisterValidators, userLoginValidators };
