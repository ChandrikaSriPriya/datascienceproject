# Data Science Platform

This project is a comprehensive data science platform that includes a backend built with Express and MongoDB, and a frontend developed using React. The platform is designed to facilitate user authentication, role management, roadmap tracking, and progress monitoring in various skills and courses.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

The backend is responsible for handling API requests and managing data. It includes:

- **config/**: Contains configuration files, including the database connection setup.
- **controllers/**: Implements the business logic for authentication, role management, roadmap retrieval, and progress tracking.
- **middleware/**: Contains middleware functions for route protection.
- **models/**: Defines the data schemas for MongoDB.
- **routes/**: Sets up the API endpoints for various functionalities.
- **utils/**: Includes utility functions, such as error handling.
- **server.js**: The entry point for the Express application.
- **package.json**: Lists dependencies and scripts for the backend.
- **.env**: Contains environment variables for configuration.

### Frontend

The frontend provides the user interface for the platform. It includes:

- **public/**: Contains the main HTML file and static assets.
- **src/**: The source code for the React application, including components, pages, utilities, and styles.
- **package.json**: Lists dependencies and scripts for the frontend.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd data-science-platform
   ```

2. **Set up the backend**:
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file and add your MongoDB URI, JWT secret, and port:
     ```
     DB_URI=<your_mongodb_uri>
     JWT_SECRET=<your_jwt_secret>
     PORT=<your_port>
     ```
   - Start the server:
     ```
     npm start
     ```

3. **Set up the frontend**:
   - Navigate to the `frontend` directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file and add your API URL:
     ```
     REACT_APP_API_URL=<your_api_url>
     ```
   - Start the React application:
     ```
     npm start
     ```

## Features

- User authentication with JWT
- Role management with CRUD operations
- Roadmap tracking with stages and content
- Progress monitoring for skills and courses

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.