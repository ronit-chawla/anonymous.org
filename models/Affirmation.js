const mongoose = require('mongoose');

const { Schema } = mongoose;

const affirmationSchema = new Schema({
  affirmation : {
    type     : String,
    required : true,
  },
  user        : {
    type    : String,
    default : 'UserUnknown',
  },
});

affirmationSchema.set('toJSON', { getters: true });
module.exports = mongoose.model(
  'Affirmation',
  affirmationSchema
);
