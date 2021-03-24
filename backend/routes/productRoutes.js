import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route    GET /api/product
// @access  Public

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
}));

// @desc    Fetch single product
// @route    GET /api/product/:id
// @access  Public

router.get('/:id', asyncHandler(async(req, res) => {
    const product = await product.findById(req.params.id);

    if(product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Товар не найден' });
    }

   
}));

export default router;