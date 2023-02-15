const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const collectionSchema = new Schema ({
    collectionName: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    card: [{type: Schema.Types.ObjectId, ref: "Card"}],
    user: [{type: Schema.Types.ObjectId, ref: "User"}]

});

module.exports = mongoose.model('Collection', collectionSchema);