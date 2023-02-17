const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/reviews'

// GET /reviews/:id/edit
router.get('reviews/:id/edit', ensureLoggedIn, reviewsCtrl.edit);
// DELETE /reviews/show (show functionality)
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);
// POST /collections
router.post('/cards/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

module.exports = router;