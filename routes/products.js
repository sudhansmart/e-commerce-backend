const express = require('express');
const router = express.Router();
const Products = require('../models/Products');


router.get('/productdetails', async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (error) {
        console.error("Error at GetProducts route:", error);  // Clearer error logging
        res.status(500).json({ error: "Failed to get products", details: error.message });
    }
});



router.post('/addproduct', async (req, res) => {
    const data = req.body;
    console.log(data)
    
    try {
        const product = new Products({ ...data });
        await product.save();
        res.status(201).json(product);  // Use 201 for created resources
    } catch (error) {
        console.error("Error at AddProduct route:", error);  // Clearer error logging
        res.status(400).json({ error: "Failed to add product", details: error.message });
    }
});

module.exports = router;
