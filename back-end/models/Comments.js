const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = new mongoose.Schema({
  id: String,
  comment: String,
  createdByEmail: String
});


module.exports = mongoose.models.Comments || mongoose.model('Comments', commentSchema)