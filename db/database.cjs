require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // MONGO_URI from your .env
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    throw err;
  }
};

module.exports = connectDB;
