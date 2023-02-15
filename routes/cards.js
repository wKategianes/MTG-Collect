const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cards');

// All routes "starts with" / (cards)

// GET a card
router.get('/', cardController.index);
// GET an /card/:id
router.get('/:id', cardController.show);
// POST a card to a collection
router.post('collections/:id/cards', cardController.create);

module.exports = router;