const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cards');

// All routes "starts with" / (cards)

// GET a card
router.get('/', cardController.index);

module.exports = router;