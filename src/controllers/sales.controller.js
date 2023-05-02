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
    console.log('AAAAAAAAAAAAAAAAAAAA', id);
    console.log('ENTROU NO 400 SALES', sales);
    return res.status(404).json({ message: 'Sale not found' });
  }
  console.log('ENTROU NO 200', sales);
  return res.status(200).json(sales);
};

module.exports = {
  getSales,
  getSalesById,
};