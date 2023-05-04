const express = require('express');
const productsController = require('../controllers/products.controller');
const { productValidator } = require('../middlewares/productValidation');

const router = express.Router();

router.get('/products', productsController.getProducts);

router.get('/products/:id', productsController.getProductsById);

router.put('products/:id', productValidator, productsController.updateProducts);

router.delete('/products/:id', productsController.deleteProducts);

router.post('/products', productValidator, productsController.createProducts);

module.exports = router;