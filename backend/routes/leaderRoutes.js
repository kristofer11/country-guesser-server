const express = require('express');
const router = express.Router();
const { getLeaders, updateLeader, setLeader, deleteLeader } = require('../controllers/leaderController');

const protect = require('../middleware/authMiddleware');

router.route('/').get(protect, getLeaders).post(protect, setLeader);

router.route('/:id').delete(protect, deleteLeader).put(protect, updateLeader);

module.exports = router;