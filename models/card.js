const mongoose = require('mongoose');
const user = require('./user');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

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
    users: [{type: Schema.Types.ObjectId, ref: "User"}],
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Card', cardSchema);