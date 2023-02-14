const mongoose = require('mongoose');
const user = require('./user');

const Schema = mongoose.Schema;

const cardSchema = new Schema ({
    name: {
        type: String,
    },
    set: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    cardId: {
        type: String,
    },
    users: [{type: Schema.Types.ObjectId, ref: "User"}]
})

module.exports = mongoose.model('Card', cardSchema);