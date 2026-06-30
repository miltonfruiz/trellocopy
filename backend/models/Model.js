const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  boardId: String,
  listId: String
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;