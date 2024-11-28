import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import ReviewItem from './components/ReviewItem';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<ReviewList />} />
                <Route path="/add" element={<ReviewForm />} />
                <Route path="/edit/:id" element={<ReviewForm editMode />} /> {/* Dynamic Route */}
                <Route path="/item" element={<ReviewItem />} />
            </Routes>
        </Router>
    );
};

export default App;
