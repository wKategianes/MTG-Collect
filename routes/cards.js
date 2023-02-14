const express = require('express');
const router = express.Router();
const MTG_URL = 'https://api.magicthegathering.io/v1/cards';

// All routes "starts with" / (root)

// GET a card
router.get('/', function(req, res) {
    const cName = req.query.name;

    fetch(`${MTG_URL}/cards/${cName}`)
    .then(res => res.json())
    .then(cardData => {
        res.render('index', {cardData});
    });
});

module.exports = router;