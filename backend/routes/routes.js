const express = require('express');
const router = express.Router();
const authMiddleware = require('./authMiddleware');

router.post('/api/auth/register', (req, res) => {
  // register a new user
});

router.post('/api/auth/login', (req, res) => {
  // login user
});

router.get('/api/boards', authMiddleware, (req, res) => {
  // list boards
});

router.post('/api/boards', authMiddleware, (req, res) => {
  // create board
});

router.get('/api/boards/:boardId', authMiddleware, (req, res) => {
  // get board
});

router.put('/api/boards/:boardId', authMiddleware, (req, res) => {
  // update board
});

router.delete('/api/boards/:boardId', authMiddleware, (req, res) => {
  // delete board
});

router.get('/api/boards/:boardId/lists', authMiddleware, (req, res) => {
  // list lists
});

router.post('/api/boards/:boardId/lists', authMiddleware, (req, res) => {
  // create list
});

router.get('/api/boards/:boardId/lists/:listId', authMiddleware, (req, res) => {
  // get list
});

router.put('/api/boards/:boardId/lists/:listId', authMiddleware, (req, res) => {
  // update list
});

router.delete('/api/boards/:boardId/lists/:listId', authMiddleware, (req, res) => {
  // delete list
});

router.get('/api/boards/:boardId/lists/:listId/cards', authMiddleware, (req, res) => {
  // list cards
});

router.post('/api/boards/:boardId/lists/:listId/cards', authMiddleware, (req, res) => {
  // create card
});

router.get('/api/boards/:boardId/lists/:listId/cards/:cardId', authMiddleware, (req, res) => {
  // get card
});

router.put('/api/boards/:boardId/lists/:listId/cards/:cardId', authMiddleware, (req, res) => {
  // update card
});

router.delete('/api/boards/:boardId/lists/:listId/cards/:cardId', authMiddleware, (req, res) => {
  // delete card
});

module.exports = router;