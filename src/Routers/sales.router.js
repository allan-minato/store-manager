const express = require('express');
const salesController = require('../controllers/sales.controller');
// const { salesValidation } = require('../middlewares/salesValidation');

const router = express.Router();

router.get('/sales', salesController.getSales);
router.get('/sales/:id', salesController.getSalesById);

module.exports = router;