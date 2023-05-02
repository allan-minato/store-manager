const salesModel = require('../models/sales.model');

const getSales = async () => {
  const sales = await salesModel.getSales();
  console.log('SALES SERVICES !!!!!!', sales);
  
  const salesInfo = sales.map((infos) => ({
    saleId: infos.sale_id,
    date: infos.date,
    productId: infos.product_id,
    quantity: infos.quantity,
  }));
  return salesInfo;
};

const getSalesById = async (id) => {
  const sales = await salesModel.getSalesById(id);
  
  const infoSalesById = sales.map((infosById) => ({
    date: infosById.date,
    quantity: infosById.quantity,
    productId: infosById.product_id,
  }));
  
  return infoSalesById;
  // if (!infoSalesById) {
  //   return { type: 404, message: { message: 'Sale not found' } };
  // }
  // return { type: null, message: infoSalesById };
};

module.exports = {
  getSales,
  getSalesById,
};