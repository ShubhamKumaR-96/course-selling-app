const { Router } = require('express'); // Destructure Router from express
const userRouter = Router(); // Create a router instance

// Signup endpoint
userRouter.post('/signup', (req, res) => {
  res.json({
    message: "Signup successful",
  });
});

// Signin endpoint
userRouter.post('/signin', (req, res) => { // Corrected the endpoint path
  res.json({
    message: "Signin successful",
  });
});

// Purchases endpoint
userRouter.get('/purchases', (req, res) => {
  res.json({
    message: "List of purchases",
  });
});

// Export the router
module.exports = userRouter; // Export directly, no need for an object