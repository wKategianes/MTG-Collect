const Card = require('../models/card');

module.exports = {
    create,
    delete: deleteReview,
    edit
};

function create(req, res){
    Card.findById(req.params.id, function(err, card){
        req.body.user = req.user.id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        card.reviews.push(req.body);
        card.save(function(err){
            res.redirect(`/cards/`);
        })
    });
};

function deleteReview (req, res, next){
    Card.findOne(
        {'reviews._id': req.params.id, 'reviews.user': req.user._id},
        function(err, card) {
            if (!card || err) return res.redirect(`/cards/${card._id}`);
            card.reviews.remove(req.params.id);
            card.save(function(err){
                res.redirect(`/cards/`);
            });
        }
    );
}

function edit(req, res) {
    Card.findOne({'reviews._id': req.params.id}, function(err, card) {
        const review = card.reviews.id(req.params.id);
        res.render('reviews/edit', {review});
    })
};