const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Provide a title'],
    trim: true,
    minLength: [3, 'Title must be more than 3 characters']
  },
  author: {
    type: String,
    trim: true,
    required: [true, 'Provide an Author'],
    minLength: [3, 'Author must be more than 3 characters']
  },
  pages: {
    type: Number,
    min: 1,
    required: true,
  },
  year: Number,
  publisher: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Book', BookSchema);
