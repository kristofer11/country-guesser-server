const asyncHandler = require('express-async-handler');

const Leader = require('../models/leaderModel');
const User = require('../models/userModel');

//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getLeaders = asyncHandler(async (req, res) => {
    const leaders = await Leader.find({ user: req.user.id })

    res.status(200).json(leaders)
});

//@desc     Set goal
//@route    POST /api/goals
//@access   Private
const setLeader = asyncHandler(async (req, res) => {
    if (!req.body.streak) {
        res.status(400)
        throw new Error('No streak detected')
    }

    const leader = await Leader.create({
        user: req.user.id,
        name: req.body.name,
        streak: req.body.streak,
        message: req.body.message
    })

    res.status(200).json(leader)
});

//@desc     Update goals
//@route    PUT /api/goals/:id
//@access   Private
const updateLeader = asyncHandler(async (req, res) => {
    const leader = await Leader.findById(req.params.id)

    if (!leader) {
        res.status(400);
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id);

    //Check for user
    if (!user) {
        res.status(401);
        throw new Error('User not found')
    }

    //Check if logged in user matches goal user
    if (global.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedLeader = await Leader.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedLeader)
});

//@desc     Delete goal
//@route    DELETE /api/goals/:ID
//@access   Private
const deleteLeader = asyncHandler(async (req, res) => {
    const leader = await Leader.findById(req.params.id)

    if (!leader) {
        res.status(400);
        throw new Error('Leader not found')
    }

    const user = await User.findById(req.user.id);

    //Check for user
    if (!user) {
        res.status(401);
        throw new Error('User not found')
    }

    //Check if logged in user matches goal user
    if (leader.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await leader.deleteOne()

    res.status(200).json({ id: req.params.id })
});

module.exports = {
    getLeaders,
    setLeader,
    updateLeader,
    deleteLeader
};