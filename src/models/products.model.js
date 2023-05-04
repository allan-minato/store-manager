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
   return { id: insertId, name };
};

const deleteProducts = async (id) => {
  const result = await connection.execute(
    `DELETE FROM StoreManager.products WHERE id = ?;
`,
    [id],
  );
  return result;
};

const updateProducts = async (productId, nameProduct) => {
  await connection.execute(
    `UPDATE StoreManager.products
      SET name = ?
      WHERE id = ?;`,
    [nameProduct, productId],
  );
  return { id: productId, name: nameProduct };
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  deleteProducts,
  updateProducts,
};