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

// /api/Thoughts
router
  .route('/:userId')
  .post(addThought)
  .get(getAllThoughts)


// /api/Thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .get(getOneThought)
  .put(addReaction)
  .put(updateThought)
  .delete(removeThought)

// /api/Thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId/:reactionId')
.delete(removeReaction);

module.exports = router;