const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/api` to routes
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/users/:userId/friends', userRoutes);

module.exports = router;