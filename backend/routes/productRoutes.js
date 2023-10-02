import express from "express";
import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();
import Product from '../models/productModel.js'
import { getProducts, getProductById } from "../controllers/productController.js";

//@desc Fetch all products
router.get('/', getProducts);

//@desc Fetch a product
router.get('/:id', getProductById);

export default router;