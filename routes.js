const express = require('express');
const {
  home,
  rant,
  affirmation,
  specialist,
  community,
  story,
} = require('./controllers/pages');
const {
  createRant,
  createAffirmation,
  createStory,
} = require('./controllers/posts');

const router = express.Router();

// GET Home Page
router.get('/', home);
// GET Rant Page
router.get('/rants', rant);
// GET Affirmations Page
router.get('/affirmations', affirmation);
// GET Stories Page
router.get('/stories', story);
// GET Specialist Page
router.get('/specialist', specialist);
// GET Community Page
router.get('/community', community);

// POST Create Rant
router.post('/rant', createRant);
// POST Create Affirmation
router.post('/affirmation', createAffirmation);
// POST Create Story
router.post('/story', createStory);

module.exports = router;
