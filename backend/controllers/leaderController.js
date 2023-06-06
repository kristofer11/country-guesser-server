const asyncHandler = require('express-async-handler');

const Leader = require('../models/leaderModel');

//@desc     Get all leaders
//@route    GET /api/leaders
//@access   Public
const getLeaders = asyncHandler(async (req, res) => {
    const leaders = await Leader.find()

    res.status(200).json(leaders)
})

//@desc     Set leader
//@route    POST /api/leader
//@access   Public
const setLeader = asyncHandler(async (req, res) => {
    const { name, streak, message } = req.body;

    if(!name || name.length !== 3) {
        res.status(400)
        throw new Error('Please enter three letter initials.')
    }
    if(!streak) {
        res.status(400)
        throw new Error('Please enter a streak.')
    }
    if (!message) {
        res.status(400)
        throw new Error('Please enter a brief message.')
    }

    const leader = await Leader.create({
        name: req.body.name,
        streak: req.body.streak,
        message: req.body.message
    });

    res.status(200).json({message: 'Your streak has been added!'})
})

//@desc     Update leader
//@route    GET /api/leader/:id
//@access   Public
const updateLeader = asyncHandler(async (req, res) => {
    const leader = await Leader.findById(req.params.id)

    if (!leader) {
        res.status(400)
        throw new Error('Leader not found')
    }

    const updatedLeader = await Leader.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedLeader)
})

//@desc     Delete leader
//@route    DELETE /api/leader/:id
//@access   Public
const deleteLeader = asyncHandler(async (req, res) => {
    const leader = await Leader.findById(req.params.id)

    if (!leader) {
        res.status(400)
        throw new Error('Leader not found')
    }

    await leader.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = { 
    getLeaders,
    setLeader,
    updateLeader,
    deleteLeader
}