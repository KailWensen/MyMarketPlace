import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authmiddleware.js";
import formidable from "express-formidable";
import {
  braintreePaymentsController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProduct,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  searchProductController,
  updateProductController,
} from "../controller/productController.js";
import braintree from "braintree";

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

//filter Products
router.post("/product-filters", productFilterController);

//count product
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search Product
router.get("/search/:keyword", searchProductController);

//category Wise product
router.get('/product-category/:slug', productCategoryController)

//payment routes
//token
router.get('/braintree/token', braintreeTokenController)
//payments
router.post('/braintree/payments', requireSignin, braintreePaymentsController)
export default router;
