const Rant = require('../models/Rant');
const Affirmation = require('../models/Affirmation');
const Story = require('../models/Story');

exports.createRant = async (req, res, next) => {
  const { rant: rantInfo } = req.body;
  const rant = new Rant({ ...rantInfo, date: new Date() });
  try {
    await rant.save();
  } catch (err) {}
  res.redirect('/rants');
};

exports.createAffirmation = async (req, res, next) => {
  const { affirmation: affirmationInfo } = req.body;
  const affirmation = new Affirmation({
    ...affirmationInfo,
  });
  try {
    await affirmation.save();
  } catch (err) {}
  res.redirect('/affirmations');
};

exports.createStory = async (req, res, next) => {
  const { story: storyInfo } = req.body;
  const story = new Story({
    ...storyInfo,
  });
  try {
    await story.save();
  } catch (err) {}
  res.redirect('/stories');
};
