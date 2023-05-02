const salesValidation = async (req, res, next) => {
  const { sales } = req.body;
  if (!sales) return res.status(404).json({ message: 'Sale not found' });

  next();
};

module.exports = {
  salesValidation,
};
