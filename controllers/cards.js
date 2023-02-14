const Card = require('../models/card');
const MTG_URL = 'https://api.magicthegathering.io/v1/cards';


module.exports = {
    index,
    show
};

// async function show(req, res) {
    
//     try {
//         const card = await
//         fetch(`${MTG_URL}/${req.params.id}`)
//         .then(res => res.json())
//         .then(card => card.card)
//         res.render('cards/show', {title: 'Card Details', card})
//         console.log(card, "This is the individual Card.");

//     } catch (error) {
//         const card = null;
//         console.log(error, "This is the error of try/catch.");
//         res.render('cards/show', {title: 'Card Details', card, error})
//     }
// }

async function show(req, res) {    
    try {
        let findCard = await Card.exists({cardId: req.params.id});
        console.log(findCard, "This is the findCard console.log");
        if (!findCard) {
        
            let card = await
            fetch(`${MTG_URL}/${req.params.id}`)
            .then(res => res.json())
            .then(card => card.card)
            let newCard = {
                name: card.name,
                set: card.set,
                imageUrl: card.imageUrl,
                cardId: card.id
            }
            console.log(card.imageUrl, "This is the ImageUrl");
            card = await Card.create(newCard);
            res.render('cards/show', {title: 'Card Details', card})
            console.log(card);
        }

        res.render('cards/show', {title: 'Card Details', findCard})        

    } catch (error) {
        console.log(error);
        res.render('cards/show', {title: 'Card Details', card, error})        
    }


}

async function index(req, res) {
    const name = req.query.name;
    const set = req.query.set;
    try {
        const cardData = await 
        fetch(`${MTG_URL}?name=${name}&set=${set}`)
        .then(res => res.json())
        .then(cards => cards.cards)
        const err = null;
        res.render('cards/index', {title: 'Card Data', cardData, err});

    } catch (err) {
        const cardData = null;
        res.render('cards/index', {title: 'Card Data', cardData});       
    }
}