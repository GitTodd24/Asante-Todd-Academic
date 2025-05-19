const express = require("express");
const donationController = require("../../controllers/donationController"); // Import donation controller

const router = express.Router();

// ✅ Payment Processing Routes
router.post("/create-payment-intent", donationController.createPaymentIntent);
router.post("/confirm-payment", donationController.confirmPayment);

// ✅ Donation Management Routes
router.get("/donations", donationController.getDonations);
router.get("/donations/:donationId", donationController.getSingleDonation);
router.post("/donations", donationController.createDonation);
router.delete("/donations/:donationId", donationController.deleteDonation);
router.post("/save-donation", donationController.saveDonation);

module.exports = router;