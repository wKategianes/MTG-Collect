const Collection = require('../models/collection');

module.exports = {
    index,
    new: newCollection
};

function index(req, res) {
    Collection.find({}, function(err, collections){
        res.render('collections/index', {title: 'All Decks'});
    });
};

function newCollection(req, res){
    res.render('collections/new', {title: 'Add Deck'});
};