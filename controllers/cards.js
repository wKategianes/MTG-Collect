const Card = require('../models/card');
const Collections = require('../models/collection');
const MTG_URL = 'https://api.magicthegathering.io/v1/cards';


module.exports = {
    index,
    show,
    create,
    new: newCard
};

function newCard(req, res) {
    res.render('cards/new', {title: 'Add Cards'});
};

async function create (req, res) {
    console.log
    Collections.findById(req.params.id, function(err, collection){
        collection.card.push(req.body);
        console.log(collection.card);
        collection.save(function(err){
            res.redirect(`/collections/${collection._id}`)
        })
    })
};

async function show(req, res) {    
    try {
        let card = await Card.findOne({cardId: req.params.id});
        console.log(card, "This is the card console.log");
        if (!card) {
        
            card = await
            fetch(`${MTG_URL}/${req.params.id}`)
            .then(res => res.json())
            .then(card => card.card)
            let newCard = {
                name: card.name,
                set: card.set,
                imageUrl: card.imageUrl,
                cardId: card.id
            }
            console.log(card.imageUrl, "This is the ImageUrl console.log");
            card = await Card.create(newCard);
            res.render('cards/show', {title: 'Card Details', card})
            console.log(card);
        }
        console.log("We are outside of the if statement");
        res.render('cards/show', {title: 'Card Details', card})        

    } catch (error) {
        console.log(error);
        const card = null;
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