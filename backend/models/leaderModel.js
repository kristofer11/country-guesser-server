const mongoose = require('mongoose');

const leaderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        maxlength: 3,
        required: [true, 'Please add your initials']
    },
    streak: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        maxlength: 100,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Leader', leaderSchema);