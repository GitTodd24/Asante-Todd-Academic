require("dotenv").config(); // Load environment variables

const Stripe = require("stripe");

if (!process.env.STRIPE_SECRET_KEY) {
    console.error("❌ Stripe Secret Key is missing! Ensure it’s set in your .env file.");
    process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Correct usage with `new`

module.exports = stripe;
