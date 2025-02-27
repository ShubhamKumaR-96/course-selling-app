const { Router } = require('express');
const courseRouter = Router();

// Purchase a course
courseRouter.post('/purchase', (req, res) => {
  res.json({
    message: "Course purchased successfully",
  });
});

// Preview a course
courseRouter.get('/preview', (req, res) => {
  res.json({
    message: "Course preview",
  });
});

module.exports =  courseRouter ; // Export as an object