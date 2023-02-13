const mongoose = require('mongoose');
const mtg = require('mtgsdk');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const collectionSchema = new Schema ({
    deckName: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    userName: String
});

module.exports = mongoose.model('Collection', collectionSchema);