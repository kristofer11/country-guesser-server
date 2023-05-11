const mongoose = require('mongoose');

const leaderSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your initials']
    },
    streak: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Leader', leaderSchema);