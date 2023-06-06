const express = require('express');
const router = express.Router();
const { 
    getLeaders,
    setLeader,
    updateLeader,
    deleteLeader
 } = require('../controllers/leaderController');

router.route('/').get(getLeaders).post(setLeader);

router.route('/:id').put(updateLeader).delete(deleteLeader);

module.exports = router;