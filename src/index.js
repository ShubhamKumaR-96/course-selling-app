const express = require('express'); // Import express correctly
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');


const app = express(); // Create an express app

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the routers
app.use('/api/v1/user', userRouter); // All user routes will be prefixed with /api/v1/user
app.use('/api/v1/course', courseRouter); // All course routes will be prefixed with /api/v1/course

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});