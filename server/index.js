const mongoose = require('mongoose');
const express = require('express');
const wordsofaffirmation = require('./models/affirmation');
const donation = require('./models/donation');
const contact = require('./models/contact');
const visitor = require('./models/visitor')

module.exports = {
  wordsofaffirmation, donation, contact, visitor
};