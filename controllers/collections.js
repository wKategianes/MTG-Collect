const Collection = require('../models/collection');

module.exports = {
    index
};

function index(req, res) {
    Collection.find({}, function(err, collections){
        res.render('collections/index', {title: 'All Collections'});
    });
};