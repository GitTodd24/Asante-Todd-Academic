// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const ContactSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  nameoforg: { type: String, required: true },
  primarycontactfirstandlastname: { type: String, required: true },
  primarycontactemail: { type: String, required: true, unique: true },
  secondarycontactfirstandlastname: { type: String, required: true },
  secondarycontactemail: { type: String, required: true, unique: true },
  eventname: { type: String, required: true },
  eventdate: {
    type: Date, // Use the Date type for proper date handling
    required: false, // Event date is optional
    default: null, // Default value when no date is provided
    validate: {
        validator: function (value) {
            return value instanceof Date; // Ensure the value is a valid date object
        },
        message: "Invalid date format. Please provide a valid date.",
    },
    },
  keynote: { type: String, required: true },
  eventdescription: { type: String, required: true },
  venuecity: { type: String, required: true },
  venuestate: {type: String, required: true },
  honor: { type: String, required: true }, 
  responsedeadline: {
    type: Date, // Specify the Date type
    required: true, // Ensure this field is required
    default: Date.now, // Set a default value (current date and time)
    validate: { // Custom validation to ensure it's a future date
        validator: function (value) {
            return value > Date.now();
        },
        message: "Response deadline must be in the future."
    }
},
visitor: { type: mongoose.Schema.Types.ObjectId, ref: "Visitor" }, // Reference Visitor
}, { timestamps: true });

//custom method 
// Define the thankYou method
ContactSchema.methods.thankYou = async function () {
  try {
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Example: using Gmail
      auth: {
        user: process.env.EMAIL_USERNAME, // Your email address (stored securely in environment variables)
        pass: process.env.EMAIL_PASSWORD, // Your email password or app password
      },
    });

    // Email details for immediate thank-you
    const immediateMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: this.email, // Email of the specific user (pulled from `this` context)
      subject: "Thank You!",
      text: `Dear ${this.firstandlastname}, thank you for submitting an invitation form on behalf of ${this.nameoforg}. Dr. Todd will reply to your inquiry soon. Be sure to visit the site again for updates!`,
    };

    // Send immediate thank-you email
    await transporter.sendMail(immediateMailOptions);
    console.log(`Immediate thank-you email sent to ${this.firstandlastname} at ${this.email}`);
  } catch (error) {
    console.error("Error sending emails:", error);
  }
};

// Using mongoose.model() to compile a model based on the schema
// 'Contact' is the name of the model
// ContactSchema is the name of the schema we are using to create a new instance of the model
const Contact = mongoose.model('Contact', ContactSchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);

// We use the model to create individual documents that have the properties as defined in our schema
Contact
  .create({
    nameoforg: 'Org1', 
    primarycontactfirstandlastname: 'John Doe', 
    primarycontactemail: 'johndoe@gmail.com', 
    secondarycontactfirstandlastname: 'Sam Doe', 
    secondarycontactemail: 'samedoe@gmail.com', 
    eventname: 'Event A', 
    eventdate: '2026-1-1', 
    keynote: 'Speaking at Events', 
    eventdescription: 'Speaker to speak on speaking at events', 
    venuecity: 'Austin', 
    venuestate: 'TX', 
    honor: 'Yes',  
    responsedeadline: '2025-07-15', 
})
.then(result => console.log('Created new document', result))
.catch(err => consoleError(err));

module.exports = Contact;