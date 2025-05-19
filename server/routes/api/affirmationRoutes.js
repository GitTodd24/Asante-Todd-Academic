const express = require('express');
const router = express.Router();
const affirmationController = require('../../controllers/affirmationController');

// Define routes - /api/affirmations
router.route('/')
  .get(affirmationController.getAffirmations)
  .post(affirmationController.createAffirmation);

router.route('/:id')
  .get(affirmationController.getSingleAffirmation)
  .put(affirmationController.updateAffirmation)
  .delete(affirmationController.deleteAffirmation);

module.exports = router;