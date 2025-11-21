const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.controller');
const { authBearer } = require('../middlewares/auth.middleware');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', authBearer, createProduct);
router.put('/:id', authBearer, updateProduct);
router.delete('/:id', authBearer, deleteProduct);

module.exports = router;
