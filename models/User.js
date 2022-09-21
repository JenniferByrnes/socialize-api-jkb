const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: 'You need to provide a user name!',
      trim: true,
      unique: true
     },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^.+@(?:[\w-]+\.)+\w+$/, 'Please fill a valid email address']
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: []
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get total count of thoughts and reactions on retrieval
UserSchema.virtual('friendCount').get(function () {
  return this.users.reduce((total, user) => total + user.friends.length + 1, 0);
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;