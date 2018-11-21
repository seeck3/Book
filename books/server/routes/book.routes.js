// use { } << bracket and you can add more if you want example: { bookController, userController }
const {
  bookController
} = require('../controllers');
// use this ('폴더 or 파일있는곳').원하는 컨트롤러
// const bookController = require('../controllers').bookController;
const router = require('express').Router();

//    /resource/:id   => after index.js it goes to /books/:id
// and /api/books/:id

module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:book_id', bookController.show)
  .put('/:book_id', bookController.update)
  .delete('/:book_id', bookController.destroy)
