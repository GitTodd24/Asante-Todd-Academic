const stripe = require("../../config/stripeConfig").stripe; // Import Stripe configuration
const { Visitor, Donation } = require("../../models");

// ✅ Ensure Stripe secret key is loaded
const checkStripeKey = () => {
    if (!process.env.STRIPE_SECRET_KEY) {
        console.error("❌ Stripe Secret Key is missing! Ensure it’s set in your .env file.");
        process.exit(1);
    }
};

// ✅ Create Payment Intent
const createPaymentIntent = async (req, res) => {
    try {
        const { amount } = req.body;

        if (!amount || isNaN(amount) || amount <= 0) {
            return res.status(400).json({ error: "Invalid amount provided." });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert dollars to cents
            currency: "usd",
            automatic_payment_methods: { enabled: true },
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("❌ Error creating Payment Intent:", error);
        res.status(500).json({ error: "Failed to create Payment Intent." });
    }
};

// ✅ Confirm Payment & Save Donation Record
const confirmPayment = async (req, res) => {
    try {
        const { donorInfo, amount, paymentMethodId, clientSecret } = req.body;

        if (!clientSecret) {
            return res.status(400).json({ error: "Missing client secret." });
        }

        const paymentIntent = await stripe.paymentIntents.confirm(clientSecret, {
            payment_method: paymentMethodId,
        });

        console.log("✅ Payment Confirmed:", paymentIntent.id);

        const donationRecord = await Donation.create({
            donorId: donorInfo.donorId,
            donationAmount: amount,
            message: donorInfo.message,
            paymentId: paymentIntent.id,
            status: "Completed",
        });

        console.log("✅ Donation record saved:", donationRecord._id);
        res.status(200).json({ success: true, paymentIntent });
    } catch (error) {
        console.error("❌ Payment confirmation failed:", error);
        res.status(500).json({ error: "Payment processing failed." });
    }
};

// ✅ Save Donation Information
const saveDonation = async (req, res) => {
    try {
        const { firstName, lastName, email, donationAmount, paymentIntentId, message } = req.body;

        const newDonation = await Donation.create({
            firstName,
            lastName,
            email,
            donationAmount,
            paymentIntentId,
            message,
        });

        console.log("✅ Donation details saved:", newDonation._id);
        res.status(201).json({ success: true, message: "Donation saved successfully!" });
    } catch (error) {
        console.error("❌ Error saving donation:", error);
        res.status(500).json({ error: "Failed to save donation." });
    }
};

// ✅ Retrieve all donation transactions
const getDonations = async (req, res) => {
    try {
        const donations = await Donation.find();
        res.json(donations);
    } catch (err) {
        res.status(500).json(err);
    }
};

// ✅ Retrieve a single donation transaction
const getSingleDonation = async (req, res) => {
    try {
        const donation = await Donation.findOne({ _id: req.params.donationId });

        if (!donation) {
            return res.status(404).json({ message: "No donation with that ID" });
        }

        res.json(donation);
    } catch (err) {
        res.status(500).json(err);
    }
};

// ✅ Create a new donation transaction
const createDonation = async (req, res) => {
    try {
        const donation = await Donation.create(req.body);
        const visitor = await Visitor.findOneAndUpdate(
            { visitorname: req.body.visitorname },
            { $addToSet: { donations: donation._id } },
            { new: true }
        );

        if (!visitor) {
            return res.status(404).json({
                message: "Donation created, but found no visitor with that ID",
            });
        }

        res.json("Created the donation 🎉");
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

// ✅ Delete a donation transaction
const deleteDonation = async (req, res) => {
    try {
        const donation = await Donation.findOneAndDelete({ _id: req.params.donationId });

        if (!donation) {
            return res.status(404).json({ message: "No donation with this ID!" });
        }

        await Visitor.findOneAndUpdate(
            { visitorname: req.body.visitorname },
            { $pull: { donations: req.params.donationId } },
            { new: true }
        );

        res.json({ message: "Donation successfully deleted!" });
    } catch (err) {
        res.status(500).json(err);
    }
};

// ✅ Export All Controller Functions
module.exports = {
    checkStripeKey,
    createPaymentIntent,
    confirmPayment,
    saveDonation,
    getDonations,
    getSingleDonation,
    createDonation,
    deleteDonation,
};