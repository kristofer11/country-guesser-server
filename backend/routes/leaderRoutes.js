const express = require('express');
const router = express.Router();
const { getLeaders, updateLeader, setLeader, deleteLeader } = require('../controllers/leaderController');

router.route('/').get(getLeaders).post(setLeader);

router.route('/:id').delete(deleteLeader).put(updateLeader);

module.exports = router;