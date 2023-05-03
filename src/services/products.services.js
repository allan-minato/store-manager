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

const createProducts = async (name) => {
  const data = await productsModel.createProducts(name);
  return data;
};

const deleteProducts = async (id) => {
  const result = await productsModel.deleteProducts(id);
  if (result[0].affectedRows === 0) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null };
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  deleteProducts,
};
