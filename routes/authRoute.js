import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} from "../controller/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authmiddleware.js";
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignin, isAdmin, testController);

//Protected Authentication route
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});
//Protected AdminAuthentication route
router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put('/profile', requireSignin, updateProfileController)

export default router;
