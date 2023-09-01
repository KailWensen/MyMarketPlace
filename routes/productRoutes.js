import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authmiddleware.js";
import formidable from "express-formidable";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProduct,
  productPhotoController,
  updateProductController,
} from "../controller/productController.js";

const router = express.Router();

//routes

//create product
router.post(
  "/create-product",
  requireSignin,
  isAdmin,
  formidable(),
  createProductController
);

//get products
router.get("/get-product", getProductController);
export default router;

//get single product
router.get("/get-product/:slug", getSingleProduct);

//get image
router.get("/product-image/:pid", productPhotoController);

//delete product
router.delete(
  "/delete-product/:pid",
  requireSignin,
  isAdmin,
  deleteProductController
);

//update product
router.put(
  "/update-product/:pid",
  requireSignin,
  isAdmin,
  formidable(),
  updateProductController
);
