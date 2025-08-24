# Mern Thinkboard Backend

This is the backend for the Mern Thinkboard project, built with Node.js and Express. It provides RESTful APIs for managing notes and other resources, and is designed to be used as part of a MERN (MongoDB, Express, React, Node.js) stack application.

## Features

- RESTful API for notes management
- MongoDB integration
- Rate limiting middleware
- Centralized error handling
- Environment configuration with dotenv

## Project Structure

```
backend/
├── package.json
├── src/
│   ├── server.js
│   ├── config/
│   │   ├── db.config.js
│   │   ├── dotenv.config.js
│   │   └── upstash.config.js
│   ├── controllers/
│   │   └── notes.controllers.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   ├── notFoundHandler.js
│   │   └── rateLimiter.js
│   ├── models/
│   │   └── Note.model.js
│   ├── routes/
│   │   └── notes.routes.js
│   └── utils/
│       └── AppError.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mohamed-abdelhafiz-dev/Note-taking-app-API.git
   cd Note-taking-app-API
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` and update the values as needed.

### Running the Server

```sh
npm start
```

The server will start on the port specified in your `.env` file (default: 5000).

## API Endpoints

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get a note by ID
- `PUT /api/notes/:id` - Update a note by ID
- `DELETE /api/notes/:id` - Delete a note by ID

## Middleware

- **Rate Limiter:** Prevents abuse by limiting repeated requests.
- **Error Handler:** Centralized error handling for API responses.
- **Not Found Handler:** Handles 404 errors for undefined routes.

## License

This project is licensed under the MIT License.
