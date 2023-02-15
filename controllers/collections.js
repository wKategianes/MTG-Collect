const Collection = require('../models/collection');
const Card = require('../models/card');
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
    res.render('collections/new', {title: 'Add Collections',});
};

function show(req, res) {
    userId = req.user._id;
    console.log(userId, 'We are logging userId');
    Collection.find({user: userId}, function(err, collections){
        res.render('collections/show', {title: 'My Collection', collections});
    });
};

function create(req, res) {
    req.body.user = req.user._id;
    const collection = new Collection(req.body);
    collection.save(function(err) {
        if (err) return res.redirect('/collections/new');
        res.redirect('/collections');
    })
}