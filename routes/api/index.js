const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/api` to routes
router.use('/users', userRoutes);
router.use('/users/:userId/friends', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/thoughts/:thoughtId/reaction', thoughtRoutes);

module.exports = router;