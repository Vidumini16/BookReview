import React, { useEffect, useState } from 'react';
import { getReviews } from '../api/api';
import ReviewItem from './ReviewItem';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for navigation

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const fetchReviews = async () => {
            const { data } = await getReviews();
            setReviews(data);
        };
        fetchReviews();
    }, []);

    const handleDelete = (id) => {
        setReviews(reviews.filter((review) => review._id !== id));
    };

    return (
        <div className="flex">
            {/* Sidebar Section */}
            <div className="w-1/4 bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Review Site Status</h2>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Search Reviews</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Search..." />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Review Site</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>Site 1</option>
                        <option>Site 2</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Star Rating</label>
                    <div className="flex">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className={`text-xl ${index < 4 ? 'text-yellow-500' : 'text-gray-300'}`} />
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Response Status</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>No Response</option>
                        <option>Response Given</option>
                    </select>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Search</button>
            </div>

            {/* Review List Section */}
            <div className="w-3/4 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Book Reviews</h1>
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                        onClick={() => navigate('/add')}
                    >
                        Add Review
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <ReviewItem key={review._id} review={review} onDelete={handleDelete} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewList;
