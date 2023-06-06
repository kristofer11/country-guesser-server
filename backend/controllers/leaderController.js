const asyncHandler = require('express-async-handler');


//@desc     Get all leaders
//@route    GET /api/leaders
//@access   Public
const getLeaders = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Hello from the backend!'})
})

//@desc     Set leader
//@route    POST /api/leader
//@access   Public
const setLeader = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter text')
    }

    res.status(200).json({message: 'set leader'})
})

//@desc     Update leader
//@route    GET /api/leader/:id
//@access   Public
const updateLeader = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update leader ${req.params.id}`})
})

//@desc     Delete leader
//@route    DELETE /api/leader/:id
//@access   Public
const deleteLeader = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete leader ${req.params.id}`})
})

module.exports = { 
    getLeaders,
    setLeader,
    updateLeader,
    deleteLeader
}