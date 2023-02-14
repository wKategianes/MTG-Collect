const Collection = require('../models/collection');
const MTG_URL = 'https://api.magicthegathering.io/v1/cards/';

module.exports = {
    index,
    new: newCollection,
    show,
    create
};

function index(req, res) {
    Collection.find({}, function(err, collections){
        res.render('collections/index', {title: 'All Collections', collections});
    });
};

function newCollection(req, res) {
    res.render('collections/new', {title: 'Add Cards',});
};

function show(req, res) {
    res.render('collections/show', {title: 'My Collection'});
}

function create(req, res) {
    const collection = new Collection(req.body);
    collection.save(function(err) {
        if (err) return res.redirect('/collections/new');
        res.redirect('collections/new');
    })
}