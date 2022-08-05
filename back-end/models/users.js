const mongoose = require('mongoose');
const {Schema} = mongoose;

const usersSchema = new mongoose.Schema({
  givenName: String,
  familyName: String,
  email: String,
  favorites: {
    comics: [],
    series: [],
    characters: [],
    events: []
  },
  view_history: {
    comics: [],
    series: [],
    characters: [],
    events: []
  }
});


module.exports = mongoose.models.Users || mongoose.model('Users', usersSchema)