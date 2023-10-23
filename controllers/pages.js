const Rant = require('../models/Rant');
const Affirmation = require('../models/Affirmation');

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

exports.specialist = async (req, res, next) => {
  res.render('specialist');
};

exports.community = async (req, res, next) => {
  res.render('community');
};
