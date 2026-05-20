const mongoose = require('mongoose');
const { use } = require('../app');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    profilePicture: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    skills: {
        type: [String],
        default: []
    },
    bannerPicture: {
        type: String,
        default: ""
    },
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;