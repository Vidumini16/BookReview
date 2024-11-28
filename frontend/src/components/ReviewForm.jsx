import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createReview, updateReview } from '../api/api';

const ReviewForm = ({ editMode = false, onSave }) => {
    const [formData, setFormData] = useState({
        bookTitle: '',
        author: '',
        rating: 1,
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
            setTimeout(() => navigate('/'), 2000);
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md max-w-md mx-auto mt-4">
            <h2 className="text-xl font-semibold mb-4">{editMode ? 'Edit Review' : 'Add New Review'}</h2>
            {message && (
                <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                    {message}
                </div>
            )}
            <div className="mb-3">
                <label className="form-label">Book Title</label>
                <input type="text" className="form-control" name="bookTitle" value={formData.bookTitle} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Author</label>
                <input type="text" className="form-control" name="author" value={formData.author} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Rating</label>
                <select className="form-select" name="rating" value={formData.rating} onChange={handleChange} required>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <option key={star} value={star}>
                            {star} Star{star > 1 && 's'}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Review Text</label>
                <textarea className="form-control" name="reviewText" rows="4" value={formData.reviewText} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-full">
                {editMode ? 'Update Review' : 'Submit Review'}
            </button>
        </form>
    );
};

export default ReviewForm;
