// models/review.js
const mongoose = require('mongoose');

// Define the schema for a book review
const reviewSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  reviewText: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

// Create the Review model from the schema
module.exports = mongoose.model('Review', reviewSchema);
