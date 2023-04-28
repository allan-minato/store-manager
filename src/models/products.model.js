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

const createProducts = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [name],
  );
  console.log('insertId MODEL:', insertId);
   return { id: insertId, name };
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
};