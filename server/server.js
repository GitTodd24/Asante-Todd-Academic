require("dotenv").config(); // Ensure this is at the very top

const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer"); // Email support

console.log("🔐 Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("❌ Stripe Secret Key is missing! Ensure it’s set in your .env file.");
  process.exit(1);
}

const connectDB = require("../db/database"); // Import DB connection function
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Ensure DB Connection Before Running Server
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error);
    process.exit(1);
  }
}

startServer();

// ✅ Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// ✅ Route Imports
const affirmationRoutes = require("./routes/api/affirmationRoutes");
const contactRoutes = require("./routes/api/contactRoutes");
const visitorRoutes = require("./routes/api/visitorRoutes");
const stripeRoutes = require("./routes/api/stripeRoutes"); // Correct Stripe route import

app.use("/api/affirmations", affirmationRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/donations", stripeRoutes); // ✅ Correctly mounted donation routes

// ✅ Invitation Contact Form Route
app.post("/submit-form", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Invitation Contact Form Submission",
    text: JSON.stringify(req.body, null, 2),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to submit form." });
  }
});

// ✅ Stripe Webhook Route (Handled inside stripeRoutes)
const webhookSecret = process.env.WEBHOOK_SECRET;
app.use("/webhook", stripeRoutes); // ✅ Ensure webhook is managed inside Stripe routes

// ✅ Graceful Shutdown Handling
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("📴 Database connection closed. Server shutting down.");
  process.exit(0);
});