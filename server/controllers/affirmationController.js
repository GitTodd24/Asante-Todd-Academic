const { Affirmation } = require('../../models');

// GET all affirmations
const getAffirmations = async (req, res) => {
  try {
    const affirmationData = await Affirmation.find();
    res.status(200).json(affirmationData);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// CREATE a new affirmation
const createAffirmation = async (req, res) => {
  try {
    const affirmationData = await Affirmation.create(req.body);
    res.status(201).json(affirmationData);
  } catch (err) {
    res.status(500).json({ message: "Error creating affirmation", error: err });
  }
};

// GET one affirmation by ID
const getSingleAffirmation = async (req, res) => {
  try {
    const affirmationData = await Affirmation.findById(req.params.id);
    if (!affirmationData) {
      return res.status(404).json({ message: "No affirmation with this id!" });
    }
    res.status(200).json(affirmationData);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// UPDATE an affirmation
const updateAffirmation = async (req, res) => {
  try {
    const affirmationData = await Affirmation.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { runValidators: true, new: true }
    );
    if (!affirmationData) {
      return res.status(404).json({ message: "No affirmation with this ID!" });
    }
    res.status(200).json(affirmationData);
  } catch (err) {
    res.status(500).json({ message: "Error updating affirmation", error: err });
  }
};

// DELETE an affirmation
const deleteAffirmation = async (req, res) => {
  try {
    const affirmationData = await Affirmation.findByIdAndDelete(req.params.id);
    if (!affirmationData) {
      return res.status(404).json({ message: "No affirmation with this id!" });
    }
    res.status(200).json({ message: "Affirmation deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// ✅ Properly Export Controller Functions
module.exports = {
  getAffirmations,
  createAffirmation,
  getSingleAffirmation,
  updateAffirmation,
  deleteAffirmation,
};