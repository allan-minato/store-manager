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

  const data = await productsServices.createProducts(name);
  return res.status(201).json(data);
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.deleteProducts(id);

  if (type) return res.status(404).json({ message });
  res.status(204).json();

  await productsServices.deleteProducts(id);

  return res.status(204).end();
};

const updateProducts = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const updatedProduct = await productsServices.updateProducts(Number(id), name);
  if (updatedProduct.type === 404) {
    return res.status(updatedProduct.type).json({ message: updatedProduct.message });
  }
  return res.status(updatedProduct.type).json(updatedProduct.message);
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  deleteProducts,
  updateProducts,
};
