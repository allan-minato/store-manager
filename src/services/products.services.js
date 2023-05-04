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

const updateProducts = async (productId, nameProduct) => {
  const product = await productsModel.getProductsById(productId);
  if (!product) return { type: 404, message: 'Product not found' };
  const updatedProduct = await productsModel.updateProducts(productId, nameProduct);
  return { type: 200, message: updatedProduct };
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  deleteProducts,
  updateProducts,
};
