const salesServices = require('../services/sales.services');

const getSales = async (req, res) => {
    const sales = await salesServices.getSales();
  console.log('SALES CONTROLLER !!!!!!', sales);
    return res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const sales = await salesServices.getSalesById(id);
 
  if (sales.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(sales);
};

module.exports = {
  getSales,
  getSalesById,
};