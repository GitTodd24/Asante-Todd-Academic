const router = require('express').Router();
const visitorController = require('../../controllers/visitorController');

// Define routes - /api/contacts
router.route('/')
  .get(visitorController.getVisitors)
  .post(visitorController.createVisitor);

router.route('/:id')
  .get(visitorController.getSingleVisitor)
  .put(visitorController.updateVisitor)
  .delete(visitorController.deleteVisitor);

module.exports = router;
