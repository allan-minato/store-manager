const productsServices = require('../services/products.services');

const getProducts = async (_req, res) => {
  const products = await productsServices.getProducts();

  return res.status(200).json(products.message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const products = await productsServices.getProductsById(id);

  if (products.type) {
    return res.status(404).json(products.message);
  }
  return res.status(200).json(products.message);
};

const createProducts = async (req, res) => {
  const { name } = req.body;
  console.log('BODY CRONTROLLER:', name);

  const data = await productsServices.createProducts(name);
  return res.status(201).json(data);
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
};