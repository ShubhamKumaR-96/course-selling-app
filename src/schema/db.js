const { Schema, model } = require("mongoose")
const ObjectId=mongoose.Types.ObjectId
const mongoose = require("mongoose");

console.log("Connecting to MongoDB...");
mongoose
  .connect("mongodb://localhost:27017/cousera-app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// User Schema
const userSchema = new Schema(
  {
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
    firstname:String,
    lastname:String
  })

// Admin Schema
const adminSchema = new Schema(
  {
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
    firstname:String,
    lastname:String
  })


// Course Schema
const courseSchema = new Schema(
  {
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
    cretorId:ObjectId
  },

);

// Purchase Schema
const purchaseSchema = new Schema(
  {
    userId:ObjectId,
    courseId:ObjectId
  }
);

const User = model("User", userSchema);
const Admin = model("Admin", adminSchema);
const Course = model("Course", courseSchema);
const Purchase = model("Purchase", purchaseSchema);

module.exports = {
  User,
  Admin,
  Course,
  Purchase,
};
