const express = require('express'); // Import express correctly
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');
const adminRouter = require('./routes/adminRoutes');


const app = express(); // Create an express app

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the routers
app.use('/api/v1/user', userRouter); 
app.use('/api/v1/course', courseRouter); 
app.use('/api/v1/admin',adminRouter)

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});