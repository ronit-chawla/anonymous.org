const Rant = require('../models/Rant');
const Affirmation = require('../models/Affirmation');
const Story = require('../models/Story');

exports.home = async (req, res, next) => {
  res.render('home');
};

exports.rant = async (req, res, next) => {
  let rants;
  try {
    rants = await Rant.find();
  } catch (err) {}
  res.render('rants', { rants });
};

exports.affirmation = async (req, res, next) => {
  let affirmations;
  try {
    affirmations = await Affirmation.find();
  } catch (err) {}
  res.render('affirmations', { affirmations });
};

exports.story = async (req, res, next) => {
  let stories;
  try {
    stories = await Story.find();
  } catch (err) {}
  res.render('stories', { stories });
};

exports.specialist = async (req, res, next) => {
  res.render('specialist');
};

exports.community = async (req, res, next) => {
  res.render('community');
};
