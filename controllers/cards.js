const Card = require('../models/card');
const MTG_URL = 'https://api.magicthegathering.io/v1/cards';


module.exports = {
    index,
    show
};

async function show(req, res) {
    
    try {
        const card = await
        fetch(`${MTG_URL}/${req.params.id}`)
        .then(res => res.json())
        .then(card => card.card)
        res.render('cards/show', {title: 'Card Details', card})
        console.log(card, "This is the individual Card.");

    } catch (error) {
        const card = null;
        console.log(error, "This is the error of try/catch.");
        res.render('cards/show', {title: 'Card Details', card, error})
    }
}

// async function show(req, res) {
//     // let card = await Card.findOne({cardId: req.params.id});
//     // console.log(card); 
    
//     try {
  
//             let card = await
//             fetch(`${MTG_URL}/${req.params.id}`)
//             .then(res => res.json())
//             .then(card => card.card)
//             let newCard = {
//                 name: card.name,
//                 set: card.set,
//                 imageURL: card.imageUrl,
//                 cardId: card.id
//             }
//             console.log(card);
//             card = Card.create(newCard);
//             res.render('cards/show', {title: 'Card Details', card})
//             console.log(card);

//     } catch (error) {
//         console.log(error);
//         res.render('cards/show', {title: 'Card Details', card, error})        
//     }
// }

async function index(req, res) {
    const name = req.query.name;
    const set = req.query.set;
    try {
        const cardData = await 
        fetch(`${MTG_URL}?name=${name}&set=${set}`)
        .then(res => res.json())
        .then(cards => cards.cards)
        console.log(cardData);
        const err = null;
        res.render('cards/index', {title: 'Card Data', cardData, err});
        console.log(cardData.id);

    } catch (err) {
        const cardData = null;
        res.render('cards/index', {title: 'Card Data', cardData});       
    }
}