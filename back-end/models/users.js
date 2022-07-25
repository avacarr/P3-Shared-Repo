const mongoose = require('mongoose');
const {Schema} = mongoose;

const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  favorites: {
    comics: [],
    comic_series: [],
    comic_stories: [],
    comic_events: [],
    creators: [],
    characters: []
},
  view_history: {
    comics: [],
    comic_series: [],
    comic_stories: [],
    comic_events: [],
    creators: [],
    characters: []
  }
});

const Users = mongoose.model('Users', usersSchema);
module.exports = Users