// Define Mongoose
const mongoose = require("mongoose");

// Check if model already exists (prevents overwrite errors)
const Donation = mongoose.models.Donation || (() => {
    // Create a new instance of the Mongoose schema to define shape of each document
    const DonationSchema = new mongoose.Schema({
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        donationAmount: { type: Number, required: true },
        message: { type: String },
        status: { type: String, default: "Pending" },
    }, { timestamps: true });

    // Define the thankYou method before model initialization
    DonationSchema.methods.thankYou = async function () {
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });

            const immediateMailOptions = {
                from: process.env.EMAIL_USERNAME,
                to: this.email,
                subject: "Thank You for Your Gift!",
                text: `Dear ${this.firstName} ${this.lastName}, thank you for your gift of "${this.donationAmount}". Be sure to visit the site again soon!`,
            };

            await transporter.sendMail(immediateMailOptions);
            console.log(`Immediate thank-you email sent to ${this.email}`);

            setTimeout(async () => {
                const followUpMailOptions = {
                    ...immediateMailOptions,
                    subject: "Follow-Up: Thank You Again!",
                    text: `Hello ${this.firstName} ${this.lastName},\n\nThank you again for your thoughtful gift of ${this.donationAmount}. Your gift is truly appreciated. Be sure to visit the site again soon for updates from Dr. Todd!`,
                };

                await transporter.sendMail(followUpMailOptions);
                console.log(`Follow-up email sent to ${this.email}`);
            }, 30 * 24 * 60 * 60 * 1000);
        } catch (error) {
            console.error("Error sending emails:", error);
        }
    };

    return mongoose.model("Donation", DonationSchema);
})();

module.exports = Donation;