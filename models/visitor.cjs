// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const VisitorSchema = new mongoose.Schema({
  ipaddress: { type: String, required: true, trim: true },
  pageviews: { type: Number, default: 0 }, 
  timeonpages: { type: Number, default: 0 }, 
  linkclicks: { type: Number, default: 0 }, 

  // Relationships
  affirmations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Affirmation" }],
  donation: [{ type: mongoose.Schema.Types.ObjectId, ref: "Donation" }],
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Contact" }],
}, { timestamps: true });

// Compile the model
const Visitor = mongoose.model('Visitor', VisitorSchema);

// Error handler function
const handleError = (err) => console.error(err);

// Create a new Visitor document with corrected data types
Visitor.create({
  ipaddress: '192.168.1.1',
  pageviews: 5,  // ✅ Changed to Number
  timeonpages: 931, // ✅ If tracking duration, consider milliseconds
  linkclicks: 6, // ✅ Changed to Number
})
  .then(result => console.log('Created new document', result))
  .catch(handleError);

module.exports = Visitor;