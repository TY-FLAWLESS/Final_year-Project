const db = require('../config/db');

exports.getProducts = async (req, res) => {
  try {
    const search = String(req.query.search || '').trim();

    let query = `
      SELECT p.*, v.shop_name, c.name AS category_name
      FROM products p
      JOIN vendors v ON v.id = p.vendor_id
      JOIN categories c ON c.id = p.category_id
    `;
    const params = [];

    if (search) {
      query += ' WHERE LOWER(p.name) LIKE ? OR LOWER(p.description) LIKE ?';
      params.push(`%${search.toLowerCase()}%`, `%${search.toLowerCase()}%`);
    }

    query += ' ORDER BY p.created_at DESC';

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { vendor_id, category_id, name, description, price, stock, image_url } = req.body;

    if (!vendor_id || !category_id || !name || !price) {
      return res.status(400).json({ message: 'vendor_id, category_id, name and price are required' });
    }

    const [result] = await db.query(
      'INSERT INTO products (vendor_id, category_id, name, description, price, image_url, stock) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [vendor_id, category_id, name, description, price, image_url || null, stock || 0]
    );

    res.status(201).json({ message: 'Product created', productId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error: error.message });
  }
};
