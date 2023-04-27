const productsServices = require('../services/products.services');

const getProducts = async (_req, res) => {
  const products = await productsServices.getProducts();
  console.log(products);
  return res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const products = await productsServices.getProductsById(id);

  if (products.type) {
    return res.status(404).json(products.message);
  }
  return res.status(200).json(products);
};

module.exports = {
  getProducts,
  getProductsById,
};