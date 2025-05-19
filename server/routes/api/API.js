const express = require("express");
const router = express.Router();
const apiRoutes = require('./API');
const { Affirmation, Contact, Donation, Visitor } = require("./models");

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

router.post("/visitors", async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    await visitor.save();
    res.status(200).send("Visitor saved successfully!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/affirmations", async (req, res) => {
  try {
    const affirmation = new Affirmation(req.body);
    await affirmation.save();
    res.status(200).send("Affirmation saved successfully!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/donations", async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(200).send("Donation/Donor saved successfully!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/contacts", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).send("Contact saved successfully!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;