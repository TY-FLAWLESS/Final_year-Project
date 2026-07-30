const db = require('../config/db');

const buildSearchQuery = (query) => {
  const clean = String(query || '').trim().toLowerCase();
  if (!clean) return [];

  return clean
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter((word) => word.length > 2)
    .slice(0, 5);
};

const fallbackSearch = async (query) => {
  const keywords = buildSearchQuery(query);

  if (!keywords.length) {
    return [];
  }

  const clauses = keywords.map(() => '(LOWER(p.name) LIKE ? OR LOWER(p.description) LIKE ?)').join(' OR ');
  const params = keywords.flatMap((word) => [`%${word}%`, `%${word}%`]);

  const [rows] = await db.query(
    `SELECT p.*, v.shop_name, c.name AS category_name
     FROM products p
     JOIN vendors v ON v.id = p.vendor_id
     JOIN categories c ON c.id = p.category_id
     WHERE ${clauses}
     ORDER BY p.created_at DESC
     LIMIT 10`,
    params
  );

  return rows;
};

exports.searchProducts = async (req, res) => {
  try {
    const query = String(req.body.query || '').trim();

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const results = await fallbackSearch(query);

    res.json({
      message: 'AI-assisted campus product search completed',
      query,
      results,
      matched: results.length,
      intent: buildSearchQuery(query)
    });
  } catch (error) {
    res.status(500).json({ message: 'AI search failed', error: error.message });
  }
};
