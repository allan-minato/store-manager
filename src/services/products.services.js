const productsModel = require('../models/products.model');

const getProducts = async () => {
  const products = await productsModel.getProducts();
  return { type: null, message: products };
};

const getProductsById = async (id) => {
  const products = await productsModel.getProductsById(id);
  if (!products) {
    return { type: 404, message: { message: 'Product not found' } };
  }
  return { type: null, message: products };
};

module.exports = {
  getProducts,
  getProductsById,
};