# BookReview
MERN Stack Project

## Overview

The BookReview application is a full-stack web application that enables users to add, edit, delete, and view book reviews. It features star ratings, search and filtering capabilities, and a responsive design. The app uses React for the frontend, Node.js with Express for the backend, and MongoDB for storing review data.

---

## Features Implemented

- **User Authentication**: (if applicable)
- **CRUD Operations**: Add, Edit, Delete, and View Book Reviews
- **Star Rating**: Rate books on a scale of 1 to 5 stars
- **Search and Filter**: Filter reviews based on search terms, rating, and response status
- **Responsive Design**: Fully responsive on desktop and mobile devices
- **Review Editing**: Edit book title, author, and review text
- **Star Rating UI**: Interactive star rating system using `react-icons` (FaStar)
- **Validation**: Input fields validated to accept only valid strings for book title, author, and review text

---

## Technologies Used

- **Frontend**:  
  - React.js  
  - Tailwind CSS  
- **Backend**:  
  - Node.js  
  - Express.js  
- **Database**:  
  - MongoDB  
- **Authentication**:  
  - (Optional, specify if implemented)  
- **Icons**:  
  - React Icons (FaStar for star ratings)  
- **Routing**:  
  - React Router  
- **State Management**:  
  - React Hooks (`useState`, `useEffect`)

---

## Installation

### Prerequisites

- Node.js
- npm package manager
- MongoDB (Local or Cloud instance)

---

### Setting Up the Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/Vidumini16/BookReview
    ```

2. Navigate to the backend directory:
    ```bash
    cd backend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up MongoDB:
    - For local MongoDB: Ensure it is running.
    - For MongoDB Atlas: Set up a cluster and get the connection string.

5. Create a `.env` file in the backend directory with your MongoDB URI:
    ```env
    MONGO_URI=your_mongo_connection_string
    PORT=5000
    ```

6. Start the backend server:
    ```bash
    node server.js
    ```

---

### Setting Up the Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend application:
    ```bash
    npm start
    ```

The frontend will be available at `http://localhost:3000`.

---

## Accessing the Application

- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000`

---

## Notes

- Built with React for the frontend and Tailwind CSS for styling.
- Backend uses Node.js and Express, with MongoDB for storing book reviews.
- The star rating system uses interactive `FaStar` icons for visual feedback.
- Fully responsive frontend for both desktop and mobile views.
- Displays confirmation messages after reviews are added or updated.

---

## Troubleshooting

- **Cannot connect to MongoDB**: Ensure your MongoDB URI is correct, and check network access if using MongoDB Atlas. For a local instance, ensure it's running on port `27017`.
  
- **CORS issues**: If encountering CORS issues, install and configure `cors` middleware:
    ```bash
    npm install cors
    ```
    In `server.js`:
    ```js
    const cors = require('cors');
    app.use(cors());
    ```

---

## Contact

- **Email**: [viduminipavithra@gmail.com](mailto:viduminipavithra@gmail.com)
- **GitHub**: [https://github.com/Vidumini16](https://github.com/Vidumini16)
- **LinkedIn**: [https://www.linkedin.com/in/vidumini-chandrasekara-64639a30a/](https://www.linkedin.com/in/vidumini-chandrasekara-64639a30a/)

