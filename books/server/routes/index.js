const bookRouter = require('./book.routes');
const router = require('express').Router();
const userRouter = require('./user.routes');


module.exports = router
  .use('/user', userRouter)
  .use('/books', bookRouter)
