const Card = require('../models/card');
const Collections = require('../models/collection');
const MTG_URL = 'https://api.magicthegathering.io/v1/cards';

module.exports = {
    index,
    show,
    addToCollection,
    new: newCard
};

function newCard(req, res) {
    res.render('cards/new', {title: 'Add Cards'});
};

async function addToCollection (req, res) {
    let collection = await Collections.findById(req.params.id);
    let card = await Card.findById(req.body.cardId);
    collection.cards.push(card);
    await collection.save(function(err){
        res.redirect(`/collections/${collection._id}`, {title: 'Collection Details', collection, card});
    })
}

async function show(req, res) {
    console.log(req.params.id, "This is the req.params.id variable");
    try {
        let card = await Card.findOne({cardId: req.params.id});
        let collection = await Collections.find({users: req.user._id});
        console.log(collection, "This is the collection variable");
        console.log(card, "This is the card console.log");
        if (!card) {            
            card = await
            fetch(`${MTG_URL}/${req.params.id}`)
            .then(res => res.json())
            .then(card => card.card)
            console.log(card, "This is the card variable")
            let newCard = {
                name: card.name,
                set: card.set,
                imageUrl: card.imageUrl,
                cardId: card.id
            }
            console.log(newCard, "This is the new card!");
            console.log(card.imageUrl, "This is the ImageUrl console.log");
            card = await Card.create(newCard);
            res.render('cards/show', {title: 'Card Details', card, collection})
            console.log(card);
        }
        console.log("We are outside of the if statement");
        res.render('cards/show', {title: 'Add Card', card, collection})        

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
        console.log(cardData, "This card data");
        let collections;
        if(res.locals.user) {
            collections = Collections.find({user: req.user._id});
        }
        console.log(collections, "This is the collections variable");
        res.render('cards/index', {title: 'Card Data', cardData, collections, err});

    } catch (err) {
        const cardData = null;
        console.log(err, "This is err")
        res.render('cards/index', {title: 'Card Data', cardData});       
    }
}