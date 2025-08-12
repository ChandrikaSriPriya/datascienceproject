import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptors for request and response
api.interceptors.request.use(
    (config) => {
        // You can add token or other headers here if needed
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors globally
        return Promise.reject(error);
    }
);

// Fetch user progress (dummy implementation, update as needed)
export const getUserProgress = async () => {
    // You may want to pass userId or get it from auth context
    try {
        const response = await api.get('/progress/123'); // Replace 123 with actual userId logic
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;