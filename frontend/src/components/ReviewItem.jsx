import React, { useState } from 'react';
import { deleteReview } from '../api/api';
import { useNavigate } from 'react-router-dom';

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
        <div className="card shadow-sm h-100">
            <div className="card-body">
                <h5 className="card-title">{review.bookTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{review.author}</h6>
                <p className="card-text">{review.reviewText}</p>
                <div className="mb-2">
                    <span className="badge bg-primary">
                        {review.rating} Star{review.rating > 1 && 's'}
                    </span>
                </div>

                {/* Display success or error message */}
                {message && (
                    <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                        {message}
                    </div>
                )}

                <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => navigate(`/edit/${review._id}`, { state: { review } })}

                >
                    Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={handleDelete}>
                    Delete
                </button>
            </div>
            <div className="card-footer text-muted">
                Added on {new Date(review.dateAdded).toLocaleDateString()}
            </div>
        </div>
    );
};

export default ReviewItem;
