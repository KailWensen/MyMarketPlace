import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authmiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controller/categoryController.js";

const router = express.Router();

//routes

//create Category
router.post(
  "/create-category",
  requireSignin,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignin,
  isAdmin,
  updateCategoryController
);

//getAll category
router.get("/get-category", categoryController);

//single category get
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignin,
  isAdmin,
  deleteCategoryController
);

export default router;
