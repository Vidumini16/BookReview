import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createReview, updateReview } from '../api/api';
import { FaStar } from 'react-icons/fa'; // import react icon

const ReviewForm = ({ editMode = false, onSave }) => {
    const [formData, setFormData] = useState({
        bookTitle: '',
        author: '',
        rating: 0, 
        reviewText: '',
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (editMode && location.state?.review) {
            setFormData(location.state.review);
        }
    }, [editMode, location.state]);

    // Validation function for string inputs
    const validateStringInput = (value) => {
        return /^[a-zA-Z\s]*$/.test(value); // Only letters and spaces allowed
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Only update the value if it passes validation
        if (name === 'bookTitle' || name === 'author' || name === 'reviewText') {
            if (validateStringInput(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, rating }); // Update the rating
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                await updateReview(location.state.review._id, formData);
                setMessage('Review updated successfully!');
            } else {
                await createReview(formData);
                setMessage('Review added successfully!');
            }
            onSave && onSave();
            setTimeout(() => navigate('/home'), 2000);
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">{editMode ? 'Edit Review' : 'Add New Review'}</h2>
            {message && (
                <div
                    className={`mb-4 p-4 rounded ${
                        message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                >
                    {message}
                </div>
            )}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Book Title</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="bookTitle"
                    value={formData.bookTitle}
                    onChange={handleChange}
                    required
                    placeholder="Enter book title"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Author</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    placeholder="Enter author name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Rating</label>
                <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star} className="cursor-pointer">
                            <input
                                type="radio"
                                name="rating"
                                value={star}
                                checked={formData.rating === star}
                                onChange={() => handleRatingChange(star)}
                                className="hidden"
                            />
                            <FaStar
                                className={`text-xl ${formData.rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                            />
                        </label>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Review Text</label>
                <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="reviewText"
                    rows="4"
                    value={formData.reviewText}
                    onChange={handleChange}
                    required
                    placeholder="Write your review"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
                {editMode ? 'Update Review' : 'Submit Review'}
            </button>
        </form>
    );
};

export default ReviewForm;
