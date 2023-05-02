const connection = require('./connection');

const getSales = async () => {
  const [sales] = await connection.execute(
    `SELECT * 
    FROM StoreManager.sales AS S 
    INNER JOIN StoreManager.sales_products AS SP
    ON S.id = SP.sale_id;`,
  );
  console.log('SALES MODEL !!!!!!', sales);
  return sales;
};

const getSalesById = async (id) => {
  const [sales] = await connection.execute(
    `SELECT * 
    FROM StoreManager.sales as S
    INNER JOIN StoreManager.sales_products as SP
    ON S.id = SP.sale_id
    WHERE S.id = ?;`,
    [id],
  );
  return sales;
};

module.exports = {
  getSales,
  getSalesById,
};