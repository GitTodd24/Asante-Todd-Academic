const { Visitor } = require('../../models');

module.exports = {
  async getVisitors(req, res) {
    try {
      const visitors = await Visitor.find()
        .populate("affirmations")
        .populate("donations") // Ensure correct capitalization
        .populate("contacts");

      res.json(visitors);
    } catch (err) {
      console.error("Error fetching visitors:", err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async getSingleVisitor(req, res) {
    try {
      const visitor = await Visitor.findOne({ _id: req.params.visitorId })
        .populate("affirmations") // Populate related affirmations
        .populate("donations") // Populate related credit/debits
        .populate("contacts") // Populate related contacts
        .select('-__v');

      if (!visitor) {
        return res.status(404).json({ message: 'No visitor with that ID' });
      }

      res.json(visitor);
    } catch (err) {
      console.error("Error fetching single visitor:", err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async createVisitor(req, res) {
    try {
      const dbVisitorData = await Visitor.create(req.body);
      res.json(dbVisitorData);
    } catch (err) {
      console.error("Error creating visitor:", err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async updateVisitor(req, res) {
    try {
      const visitor = await Visitor.findOneAndUpdate(
        { _id: req.params.visitorId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!visitor) {
        return res.status(404).json({ message: 'No visitor with this id!' });
      }

      res.json(visitor);
    } catch (err) {
      console.error("Error updating visitor:", err);
      res.status(500).json({ message: "Server error" });
    }
  },

  async deleteVisitor(req, res) {
    try {
      const visitor = await Visitor.findOneAndDelete({ _id: req.params.visitorId });

      if (!visitor) {
        return res.status(404).json({ message: 'No visitor with this id!' });
      }

      res.json({ message: 'Visitor successfully deleted!' });
    } catch (err) {
      console.error("Error deleting visitor:", err);
      res.status(500).json({ message: "Server error" });
    }
  },
};