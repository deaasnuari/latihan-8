const Products = require('../models/products.model');

exports.getAllProducts = (req, res) => {
  Products.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  Products.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json(results[0]);
  });
};

exports.createProduct = (req, res) => {
  const data = req.body;
  Products.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...data });
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Products.update(id, data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json({ message: 'Produk berhasil diupdate' });
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  Products.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json({ message: 'Produk berhasil dihapus' });
  });
};
