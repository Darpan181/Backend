# Starting with Backend

# Backend Project

A RESTful API built with Node.js, Express.js, and MongoDB. This project provides user authentication and database operations through secure API endpoints.

## Features

* User registration
* User login
* Password hashing
* MongoDB database integration
* JWT authentication
* CRUD operations
* Error handling

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* dotenv

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the server

```bash
npm run dev
```

## API Endpoints

### Authentication

#### Register User

```http
POST /api/users/register
```

#### Login User

```http
POST /api/users/login
```

### User

#### Get User Profile

```http
GET /api/users/profile
```

## Project Structure

```text
project/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── app.js
│
├── .env
├── package.json
└── README.md
```

## Learning Outcomes

Through this project I learned:

* REST API development
* MongoDB and Mongoose
* Authentication using JWT
* Password hashing with bcrypt
* Environment variable management
* Backend project structure

## Author

Darpan Pawar
