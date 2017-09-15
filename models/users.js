const mongoose    =   require('mongoose');

const userSchema  =   mongoose.Schema({
  username: {type: String, required: true, unique: true},
  profilePic: String,
  password: {type: String, required: true},
  zipcode: String,
  favorites: []
})

const Users       =   mongoose.model('User', userSchema);

module.exports    =   Users;
