const Rant = require('../models/Rant');
const Affirmation = require('../models/Affirmation');
const Story = require('../models/Story');

exports.createRant = async (req, res, next) => {
  const { rant, title, user } = req.body;
  console.log(rant, title, user);
  await Rant.create([
    {
      rant,
      title,
      user,
      date  : new Date().toDateString(),
    },
  ]);
  console.log('rant created');
  res.redirect('/rants');
};

exports.createAffirmation = async (req, res, next) => {
  const { affirmation, user } = req.body;
  const affirmation1 = new Affirmation({
    affirmation,
    user,
  });
  try {
    await affirmation1.save();
  } catch (err) {}
  res.redirect('/affirmations');
};

exports.createStory = async (req, res, next) => {
  console.log('requests', req.body);
  const story = new Story({
    ...req.body,
  });
  try {
    await story.save();
  } catch (err) {}
  res.redirect('/stories');
};
