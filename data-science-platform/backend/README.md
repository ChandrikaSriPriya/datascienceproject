# Backend Setup for Data Science Platform

## MongoDB Atlas Setup

### 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new cluster (M0 Free tier is sufficient for development)

### 2. Configure Database Access
1. In your Atlas dashboard, go to "Database Access"
2. Click "Add New Database User"
3. Create a username and password (save these securely)
4. Set privileges to "Read and write to any database"

### 3. Configure Network Access
1. Go to "Network Access"
2. Click "Add IP Address"
3. For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
4. For production: Add your specific IP addresses

### 4. Get Connection String
1. Go to "Clusters" and click "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<username>`, `<password>`, and `<dbname>` with your actual values

### 5. Environment Variables
Create a `.env` file in the backend directory with the following variables:

```env
# MongoDB Atlas Connection String
DB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database?retryWrites=true&w=majority

# JWT Secret for token generation (generate a strong random string)
JWT_SECRET=your_super_secret_jwt_key_here

# Server Port
PORT=5000

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000
```

## Installation and Running

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Start Production Server
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Request/Response Examples

#### Register User
```json
POST /api/auth/register
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}

Response:
{
  "success": true,
  "message": "User registered successfully"
}
```

#### Login User
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "securepassword123"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

## Security Features

- Password hashing using bcryptjs
- JWT token authentication
- Protected routes middleware
- Input validation and sanitization
- CORS configuration
- Error handling middleware

## Database Schema

### User Model
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  roles: [ObjectId] (references to Role model),
  createdAt: Date (default: now)
}
```

## Troubleshooting

### Common Issues

1. **Connection Failed**: Check your MongoDB Atlas connection string and network access settings
2. **Authentication Error**: Verify your database username and password
3. **CORS Error**: Ensure FRONTEND_URL is correctly set in your .env file
4. **JWT Error**: Make sure JWT_SECRET is set and is a strong random string

### Testing the Connection
You can test your MongoDB connection by running the server and checking the console output. You should see:
```
✅ MongoDB Connected
🚀 Server is running on port 5000
```
