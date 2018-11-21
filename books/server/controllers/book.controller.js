// using const Book = require('mongoose').model('Book'); instead of using mongoose and book seperate
const Book = require('mongoose').model('Book');

// const Book = mongoose.model('Book');


module.exports = {
  // get all of resource
  index(request, response) {
    console.log("getting books");
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log)
  },

  // get a single resource
  show(request, response) {
    Book.findById(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log)
  },

  // create resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Objest.keys(error.errors).map(key => error.errors[key].message)

        response.status(402).json(errors);
      });
  },

  // update resource
  update(request, response) {
    Book.findByIdAndUpdate(request.params.book_id, request.body, {
        new: true
      })
      .then(book => response.json(book))
      .catch(console.log)
  },

  // delete/remove resource
  destroy(request, response) {
    Book.findByIdAndRemove(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log)
  },

};
