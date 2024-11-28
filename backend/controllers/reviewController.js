// controllers/reviewController.js
const Review = require('../models/review');

// Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving reviews', error: err.message });
  }
};

// Create a new review
const createReview = async (req, res) => {
  try {
    const { bookTitle, author, rating, reviewText } = req.body;
    if (!bookTitle || !author || !rating || !reviewText) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newReview = new Review({
      bookTitle,
      author,
      rating,
      reviewText,
    });

    await newReview.save();
    res.status(201).json({ message: 'Review created successfully', review: newReview });
  } catch (err) {
    res.status(500).json({ message: 'Error creating review', error: err.message });
  }
};

// Update a review
const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { bookTitle, author, rating, reviewText } = req.body;

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { bookTitle, author, rating, reviewText },
      { new: true, runValidators: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: 'Review updated successfully', review: updatedReview });
  } catch (err) {
    res.status(500).json({ message: 'Error updating review', error: err.message });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting review', error: err.message });
  }
  res.status(500).json({ message: 'Error updating review', error: err.message || 'Unknown error' });

};

module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
};
