const asyncHandler = require('express-async-handler')

//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getLeaders = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get leaders' })
})

//@desc     Set goal
//@route    POST /api/goals
//@access   Private
const setLeader = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set leader' })
})

//@desc     Update goals
//@route    PUT /api/goals/:id
//@access   Private
const updateLeader =  asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update leader ${req.params.id}` })
})

//@desc     Delete goal
//@route    DELETE /api/goals/:ID
//@access   Private
const deleteLeader = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete leader ${req.params.id}` })
})

module.exports = {
    getLeaders,
    setLeader,
    updateLeader,
    deleteLeader
}