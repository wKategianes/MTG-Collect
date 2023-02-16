const express = require('express');
const router = express.Router();
const collectionsCtrl = require('../controllers/collections');

// All routes start with '/collections'

// GET /collections (display all collections)
router.get('/', collectionsCtrl.index);
// GET /collections/new (new functionality)
router.get('/new', collectionsCtrl.new);
// GET /collections/show (show functionality)
router.get('/:id', collectionsCtrl.show);
// POST /collections
router.post('/', collectionsCtrl.create);

module.exports = router;