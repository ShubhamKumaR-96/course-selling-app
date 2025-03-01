const { Router } = require("express");

const adminRouter = Router();

// Admin Signup
adminRouter.post('/signup', (req, res) => {
    res.json({ message: "Admin signup successful" });
});

// Admin Signin
adminRouter.post('/signin', (req, res) => {
    res.json({ message: "Admin signin successful" });
});

// Create a new course
adminRouter.post('/course', (req, res) => {
    res.json({ message: "Course created successfully" });
});

// Update an existing course (use route parameter)
adminRouter.put('/course/:id', (req, res) => {
    res.json({ message: `Course with ID ${req.params.id} updated successfully` });
});

// Get all courses in bulk
adminRouter.get('/courses', (req, res) => {
    res.json({ message: "List of all courses" });
});

module.exports = adminRouter;
