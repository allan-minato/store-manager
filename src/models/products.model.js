const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products;');
  return products;
};

const getProductsById = async (param) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [param],
  );
  return products;
};

module.exports = {
  getProducts,
  getProductsById,
};