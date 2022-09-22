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
  .route()
  .post(addThought)
  .get(getAllThoughts)


// /api/Thoughts/<thoughtId>
router
  .route('/:thoughtId')
  // .get(getOneThought)
  // .put(updateThought)
  // .delete(removeThought)

// /api/Thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.put(addReaction)
.delete(removeReaction);


module.exports = router;