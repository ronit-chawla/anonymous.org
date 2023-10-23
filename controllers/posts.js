const Rant = require('../models/Rant');
const Affirmation = require('../models/Affirmation');

exports.createRant = async (req, res, next) => {
  const { rant: rantInfo } = req.body;
  const rant = new Rant({ ...rantInfo });
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
