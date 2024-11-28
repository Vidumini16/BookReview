import React, { useState } from 'react';
import { deleteReview } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; // Importing the FaStar icon

const ReviewItem = ({ review, onDelete }) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');  // State for message

    const handleDelete = async () => {
        try {
            await deleteReview(review._id);  // Call API to delete the review
            setMessage('Review deleted successfully!');  // Success message
            onDelete(review._id);  // Update the list after deletion
        } catch (error) {
            setMessage('Something went wrong. Please try again later.');  // Error message
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 transition-all hover:shadow-2xl">
            <div className="p-6">
                <h5 className="text-2xl font-semibold text-gray-800 mb-2">{review.bookTitle}</h5>
                <h6 className="text-sm text-gray-600 mb-4">{review.author}</h6>

                {/* Review Text */}
                <p className="text-gray-800 mb-4">{review.reviewText}</p>

                {/* Star Rating */}
                <div className="mb-4 flex">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={`text-xl ${review.rating > index ? 'text-yellow-500' : 'text-gray-300'}`}
                        />
                    ))}
                </div>

                {/* Rating Badge */}
                <div className="mb-4">
                    <span className="inline-block py-1 px-3 text-white bg-blue-500 rounded-full">
                        {review.rating} Star{review.rating > 1 ? 's' : ''}
                    </span>
                </div>

                {/* Display success or error message */}
                {message && (
                    <div
                        className={`p-3 rounded-lg text-white ${message.includes('successfully') ? 'bg-green-500' : 'bg-red-500'}`}
                    >
                        {message}
                    </div>
                )}

                {/* Buttons */}
                <div className="mt-6 flex justify-between">
                    <button
                        className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all duration-200"
                        onClick={() => navigate(`/edit/${review._id}`, { state: { review } })}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-200"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 text-gray-600 p-4 text-sm text-center">
                Added on {new Date(review.dateAdded).toLocaleDateString()}
            </div>
        </div>
    );
};

export default ReviewItem;
