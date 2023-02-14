const Card = require('../models/card');
const MTG_URL = 'https://api.magicthegathering.io/v1/cards?name=Forest&set=SOI';

module.exports = {
    index,
};

async function index(req, res) {
    const cName = req.query.name;
    const sName = req.query.set;
    try {
        const cardData = await 
        fetch(`${MTG_URL}`)
        .then(res => res.json())
        .then(cards => cards.cards)
        console.log(cardData);
        const err = null;
        res.render('cards/index', {title: 'Card Data', cardData, err});
        console.log(cardData);

    } catch (err) {
        const cardData = null;
        res.render('cards/index', {title: 'Card Data', cardData});       
    }
}