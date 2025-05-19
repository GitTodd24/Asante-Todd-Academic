const { Visitor, Contact } = require('../../models');

// GET all contacts
const getContacts = async (req, res) => {
  try {
    const contactData = await Contact.find();
    res.status(200).json(contactData);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// CREATE a new Contact
const createContact = async (req, res) => {
  try {
    const contactData = await Contact.create(req.body);
    const visitor = await Visitor.findOneAndUpdate(
        { visitorname: req.body.visitorname },
         { $addToSet: { contacts: contact._id } },
         { new: true }
                );
    
                if (!visitor) {
                    return res.status(404).json({
                        message: "Contact created, but found no visitor with that ID",
                    });
                }
    res.status(201).json(contactData);
  } catch (err) {
    res.status(500).json({ message: "Error creating contact", error: err });
  }
};

// GET one contact by ID
const getSingleContact = async (req, res) => {
  try {
    const contactData = await Contact.findById(req.params.id);
    if (!contactData) {
      return res.status(404).json({ message: "No contact with this id!" });
    }
    res.status(200).json(contactData);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// UPDATE a contact
const updateContact = async (req, res) => {
  try {
    const contactData = await Contact.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { runValidators: true, new: true }
    );
    if (!contactData) {
      return res.status(404).json({ message: "No contact with this ID!" });
    }
    res.status(200).json(contactData); // ✅ Fixed variable reference
  } catch (err) {
    res.status(500).json({ message: "Error updating contact", error: err });
  }
};

// DELETE a contact
const deleteContact = async (req, res) => {
  try {
    const contactData = await Contact.findByIdAndDelete(req.params.id);
    if (!contactData) {
      return res.status(404).json({ message: "No contact with this id!" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Properly Export Controller Functions
module.exports = {
  getContacts,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
};