const router = require('express').Router();
const affirmationRoutes = require('./affirmationRoutes');
const stripeRoutes = require('./stripeRoutes');
const contactRoutes = require('./contactRoutes')
const visitorRoutes = require('./visitorRoutes')

//http://localhost:5000/api/thoughts
router.use('/affirmations', affirmationRoutes);

//http://localhost:500/api/users
router.use('/donations', stripeRoutes);

router.use('/contacts', contactRoutes);

router.use('/visitors', visitorRoutes);

module.exports = router;