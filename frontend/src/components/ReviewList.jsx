// ReviewList.jsx
import React, { useEffect, useState } from 'react';
import { getReviews } from '../api/api';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const { data } = await getReviews();  // Fetch reviews from API
            setReviews(data);
        };
        fetchReviews();
    }, []);

    const handleDelete = (id) => {
        setReviews(reviews.filter((review) => review._id !== id));  // Remove deleted review from the list
    };

    return (
        <div className="container my-4">
            <h1 className="text-2xl font-bold mb-4">Book Reviews</h1>
            <div className="row">
                {reviews.map((review) => (
                    <div key={review._id} className="col-md-6 col-lg-4 mb-4">
                        <ReviewItem review={review} onDelete={handleDelete} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewList;
