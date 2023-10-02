import express from "express";
import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();
import Product from '../models/productModel.js'

//@desc Fetch all products
router.get('/', asyncHandler(async(req,res)=> {
    const products = await Product.find({});// we want all the products, so no argument was passed
    res.json(products);
}));

router.get('/:id',asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        return res.json(product);
    } 
    res.status(404).json({message:'Product not Found'});
    
}));

export default router;