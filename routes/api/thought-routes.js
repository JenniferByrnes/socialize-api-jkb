const router = require('express').Router();

const {
  addThought,
  getAllThoughts,
  getOneThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router
  .route('/:thoughtId/reaction/:reactionId')
  .delete(removeReaction);

// /api/Thoughts/:thoughtId/reaction
router
  .route('/:thoughtId/reaction')
  .post(addReaction);

// /api/Thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(removeThought)

// /api/Thoughts
router
  .route('/')
  .post(addThought)
  .get(getAllThoughts)

module.exports = router;