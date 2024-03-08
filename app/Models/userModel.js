const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true
    },
    verify: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
        default: 0
    },
    walletAddress: {
        type: String,
    },
    watchlist: {
        type: Array,
        required: true
    },
    // coinlist: {
    //     type: Array,
    //     required: true
    // },
    status: {
        type: String,
        default: "activate"
    },
}, { timestamps: true })

const userModel = mongoose.model('user', userSchema);

module.exports = userModel