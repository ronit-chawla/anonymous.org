const mongoose = require('mongoose');

const { Schema } = mongoose;

const storySchema = new Schema({
  story : {
    type     : String,
    required : true,
  },
  title : {
    type     : String,
    required : true,
  },
  quote : {
    type     : String,
    required : true,
  },
  user  : {
    type    : String,
    default : 'UserUnknown',
  },
});

storySchema.set('toJSON', { getters: true });
module.exports = mongoose.model('Story', storySchema);
