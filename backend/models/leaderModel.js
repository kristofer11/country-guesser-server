const mongoose = require('mongoose');

const leaderSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add your name (3 letters max)'],
            maxlength: [8, 'Name cannot be more than 3 characters'],
        },
        streak: {
            type: Number,
            required: true
        },
        message: {
            type: String,
            maxlength: [100, 'Message cannot be more than 100 characters'],
        },
    },
    {timestamp: true}
    )

    module.exports = mongoose.model('Leader', leaderSchema);