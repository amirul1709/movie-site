# Netflix at Home

A simple full-stack movie review web application. Users can browse popular movies, search for titles, and add, edit, or delete reviews for each movie.

## Features

- Browse popular movies using [The Movie Database (TMDb)](https://www.themoviedb.org/) API
- Search for movies by title
- View and manage reviews for each movie
- Add, edit, and delete reviews (backend with MongoDB)

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB Atlas account (or local MongoDB instance)
- TMDb API key

### Backend Setup

1. Navigate to `movie-site-backend/`
2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file with your MongoDB credentials:

    ```
    MONGO_USERNAME=your_username
    MONGO_PASSWORD=your_password
    ```

4. Start the backend server:

    ```sh
    npm start
    ```

   The backend runs on `http://localhost:8000`.

### Frontend Setup

1. Navigate to `movie-site-frontend/`
2. Open `index.html` in your browser.
3. Ensure your TMDb API key is set in `script.js`:

    ```js
    const API_KEY = "your_tmdb_api_key"
    ```

## Usage

- Browse movies on the homepage.
- Click "reviews" on any movie to view/add/edit/delete reviews.
- Reviews are stored in MongoDB.

## File Overview

- **movie-site-backend/**: Express.js API for managing reviews ([`server.js`](movie-site-backend/server.js), [`api/reviews.controller.js`](movie-site-backend/api/reviews.controller.js), [`dao/reviewsDAO.js`](movie-site-backend/dao/reviewsDAO.js))
- **movie-site-frontend/**: Static frontend using HTML, CSS, and vanilla JS ([`index.html`](movie-site-frontend/index.html), [`script.js`](movie-site-frontend/script.js), [`movie.html`](movie-site-frontend/movie.html), [`movie.js`](movie-site-frontend/movie.js), [`styles.css`](movie-site-frontend/styles.css))

## License

MIT
