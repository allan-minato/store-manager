const express = require('express');
const productsController = require('../controllers/products.controller');
const { productValidator } = require('../middlewares/productValidation');

const router = express.Router();

router.get('/products', productsController.getProducts);

router.get('/products/:id', productsController.getProductsById);

router.post('/products', productValidator, productsController.createProducts);

router.delete('products/:productId', productsController.deleteProducts);
module.exports = router;