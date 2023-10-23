const mongoose = require('mongoose');

const { Schema } = mongoose;

const rantSchema = new Schema({
  title : {
    type     : String,
    required : true,
  },
  rant  : {
    type     : String,
    required : true,
  },
  user  : {
    type    : String,
    default : 'UserUnknown',
  },
});

rantSchema.set('toJSON', { getters: true });
module.exports = mongoose.model('Rant', rantSchema);
