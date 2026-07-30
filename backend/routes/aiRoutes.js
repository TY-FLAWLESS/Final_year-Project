const express = require('express');
const { searchProducts } = require('../controllers/aiController');

const router = express.Router();

router.post('/search', searchProducts);

module.exports = router;
