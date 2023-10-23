const express = require('express');
const {
  home,
  rant,
  affirmation,
  specialist,
  community,
} = require('./controllers/pages');
const {
  createRant,
  createAffirmation,
} = require('./controllers/posts');

const router = express.Router();

// GET Home Page
router.get('/', home);
// GET Rant Page
router.get('/rants', rant);
// GET Affirmations Page
router.get('/affirmations', affirmation);
// GET Specialist Page
router.get('/specialist', specialist);
// GET Community Page
router.get('/community', community);

// POST Create Rant
router.post('/rant', createRant);
// POST Create Affirmation
router.post('/affirmation', createAffirmation);

module.exports = router;
