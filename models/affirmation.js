// Define Mongoose
const mongoose = require('mongoose');
// Define nodemailer for sending emails
const nodemailer = require("nodemailer");

// Create a new instance of the Mongoose schema to define the shape of each document
const AffirmationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  prefix: { type: String, required: false },
  suffix: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  visitor: { type: mongoose.Schema.Types.ObjectId, ref: "Visitor" }, // Reference Visitor
  publicFields: { 
    type: [String], 
    default: [], 
    validate: {
      validator: function(fields) {
        return !fields.includes("email"); // Prevent "email" from being public
      },
      message: "Email cannot be a public field."
    }
  }
}, { timestamps: true });

// Define the thankYou method
AffirmationSchema.methods.thankYou = async function () {
  try {
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email details for immediate thank-you
    const immediateMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: this.email,
      subject: "Thank You for Your Gift!",
      text: `Thank you ${this.firstName} ${this.lastName} for your gift of words of affirmation: "${this.message}". Be sure to visit the site again soon!`,
    };

    // Send immediate thank-you email
    await transporter.sendMail(immediateMailOptions);
    console.log(`Immediate thank-you email sent to ${this.firstName} ${this.lastName} at ${this.email}`);

    // Schedule follow-up thank-you email (using setTimeout for simplicity)
    setTimeout(async () => {
      const followUpMailOptions = {
        ...immediateMailOptions,
        subject: "Follow-Up: Thank You Again!",
        text: `Hello ${this.firstName} ${this.lastName},\n\nI deeply appreciate your thoughtful gift of words of affirmation: "${this.message}". Thanks again for visiting the site. Hope to hear from you soon!`,
      };

      await transporter.sendMail(followUpMailOptions);
      console.log(`Follow-up email sent to ${this.firstName} ${this.lastName}`);
    }, 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds
  } catch (error) {
    console.error("Error sending emails:", error);
  }
};

// Post-save hook to automatically trigger thank-you email
AffirmationSchema.post("save", async function (doc, next) {
  try {
    await doc.thankYou();
  } catch (error) {
    console.error("Error sending thank-you email:", error);
  }
  next();
});

// Compile the model
const Affirmation = mongoose.model('Affirmation', AffirmationSchema);

// Error handler function
const handleError = (err) => console.error(err);

// Create and save a new affirmation document
Affirmation.create({
  firstName: 'John',
  lastName: 'Doe', 
  prefix: 'N/A', 
  suffix: 'N/A',
  email: 'johndoe@gmail.com',
  message: 'Great job Dr Todd!',
  publicFields: ['prefix', 'firstName', 'lastName', 'suffix', 'message'],
})
  .then(result => console.log('Created new document', result))
  .catch(handleError);

module.exports = Affirmation;