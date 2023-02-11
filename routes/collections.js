const express = require('express');
const router = express.Router();
const collectionsCtrl = require('../controllers/collections');

// All routes start with '/collections'

// GET /collections (display all collections)
router.get('/', collectionsCtrl.index);
// GET /collections/new (new functionality)
router.get('/new', collectionsCtrl.new);

module.exports = router;