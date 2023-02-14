const Card = require('../models/card');
const MTG_URL = 'https://api.magicthegathering.io/v1/cards/';

module.exports = {
    index,
};

async function index(req, res) {
    const cName = req.query.name;
    try {
        const cardData = await 
        fetch(`${MTG_URL}/cards/`)
        .then(res => res.json())
        .then(cards => cards.cards)
        const err = null;
        res.render('index', {title: 'Card Data', cardData, err});
        console.log(cardData);

    } catch (err) {
        const cardData = null;
        res.render('index', {title: 'Card Data', cardData});       
    }
}