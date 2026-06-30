// boards.controller.js
const Board = require('../models/Board');

exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBoard = async (req, res) => {
  try {
    const { title } = req.body;
    const board = new Board({ title });
    await board.save();
    res.json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBoard = async (req, res) => {
  try {
    const boardId = req.params.boardId;
    const board = await Board.findById(boardId);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBoard = async (req, res) => {
  try {
    const boardId = req.params.boardId;
    const board = await Board.findByIdAndUpdate(boardId, req.body, { new: true });
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBoard = async (req, res) => {
  try {
    const boardId = req.params.boardId;
    await Board.findByIdAndRemove(boardId);
    res.json({ message: 'Board deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// lists.controller.js
const List = require('../models/List');

exports.getLists = async (req, res) => {
  try {
    const boardId = req.params.boardId;
    const lists = await List.find({ boardId });
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createList = async (req, res) => {
  try {
    const { title } = req.body;
    const boardId = req.params.boardId;
    const list = new List({ title, boardId });
    await list.save();
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getList = async (req, res) => {
  try {
    const listId = req.params.listId;
    const list = await List.findById(listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateList = async (req, res) => {
  try {
    const listId = req.params.listId;
    const list = await List.findByIdAndUpdate(listId, req.body, { new: true });
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteList = async (req, res) => {
  try {
    const listId = req.params.listId;
    await List.findByIdAndRemove(listId);
    res.json({ message: 'List deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// cards.controller.js
const Card = require('../models/Card');

exports.getCards = async (req, res) => {
  try {
    const listId = req.params.listId;
    const cards = await Card.find({ listId });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCard = async (req, res) => {
  try {
    const { title, description } = req.body;
    const listId = req.params.listId;
    const card = new Card({ title, description, listId });
    await card.save();
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCard = async (req, res) => {
  try {
    const cardId = req.params.cardId;
    const card = await Card.findById(cardId);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCard = async (req, res) => {
  try {
    const cardId = req.params.cardId;
    const card = await Card.findByIdAndUpdate(cardId, req.body, { new: true });
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const cardId = req.params.cardId;
    await Card.findByIdAndRemove(cardId);
    res.json({ message: 'Card deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};