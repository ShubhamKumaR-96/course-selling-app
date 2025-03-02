const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

console.log("Connecting to MongoDB...");
mongoose.connect("mongodb://localhost:27017/cousera-app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'instructor'], // Add 'instructor' if needed
    default: 'user',
  },
  purchases: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Purchase', // Reference to the Purchase model
    },
  ],
}, { timestamps: true });

// Admin Schema
const adminSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  permissions: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

// Course Schema
const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Purchase', // Reference to the Purchase model
    },
  ],
}, { timestamps: true });

// Purchase Schema
const purchaseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  paymentStatus: {
    type: Boolean,
    default: false, // false = pending, true = completed
  },
}, { timestamps: true });

const User = model('User', userSchema);
const Admin = model('Admin', adminSchema);
const Course = model('Course', courseSchema);
const Purchase = model('Purchase', purchaseSchema);

module.exports = {
  User,
  Admin,
  Course,
  Purchase,
};