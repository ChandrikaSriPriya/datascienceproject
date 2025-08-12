const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all progress for a user
router.get('/:userId', authMiddleware, progressController.getAllProgress);

// Route to update user progress
router.put('/:userId', authMiddleware, progressController.updateProgress);

// Route to delete user progress (not implemented in controller, so this may need to be removed or implemented)
// router.delete('/:userId', authMiddleware, progressController.deleteUserProgress);

module.exports = router;