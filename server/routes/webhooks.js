const express = require("express");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripeRoutes = require("./routes/stripeRoutes"); // Your Stripe payment routes
const webhookRoutes = require("./routes/webhook"); // Newly created webhook routes

const app = express();

// ✅ Middleware: Use raw body for Stripe webhook verification
app.use("/api/webhook", express.raw({ type: "application/json" })); 

// ✅ JSON parsing for other routes
app.use(express.json());

app.use("/api/payments", stripeRoutes); // Stripe payment routes
app.use("/api", webhookRoutes); // Webhook route

// ✅ Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Handle Stripe Webhook Verification
app.post("/api/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === "payment_intent.succeeded") {
      console.log("✅ Payment succeeded:", event.data.object.id);
      // Additional logic (e.g., updating donation records) can be added here.
    }

    res.sendStatus(200);
  } catch (err) {
    console.error("❌ Webhook verification failed:", err.message);
    res.status(400).json({ error: `Webhook error: ${err.message}` });
  }
});

// ✅ Start Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});