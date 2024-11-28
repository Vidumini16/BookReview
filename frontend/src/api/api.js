// api.js (Update the base URL to include '/api' for backend routes)
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/reviews';  // updated URL

export const getReviews = () => axios.get(API_BASE_URL);

export const createReview = (review) => axios.post(API_BASE_URL, review);

export const updateReview = (id, review) => axios.put(`${API_BASE_URL}/${id}`, review);

export const deleteReview = (id) => axios.delete(`${API_BASE_URL}/${id}`);
