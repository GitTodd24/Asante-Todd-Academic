const router = require('express').Router();
const contactController = require('../../controllers/contactController');

// Define routes - /api/contacts
router.route('/')
  .get(contactController.getContacts)
  .post(contactController.createContact);

router.route('/:id')
  .get(contactController.getSingleContact)
  .put(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;

