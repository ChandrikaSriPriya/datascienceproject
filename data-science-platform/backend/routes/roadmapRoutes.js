const express = require('express');
const router = express.Router();
const roadmapController = require('../controllers/roadmapController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all roadmap stages
router.get('/', authMiddleware, roadmapController.getRoadmapStages);

// Route to get a specific roadmap by ID
router.get('/:id', authMiddleware, roadmapController.getRoadmapStageById);

// Route to create a new roadmap
router.post('/', authMiddleware, roadmapController.createRoadmapStage);

// Route to update a roadmap by ID
router.put('/:id', authMiddleware, roadmapController.updateRoadmapStage);

// Route to delete a roadmap by ID
router.delete('/:id', authMiddleware, roadmapController.deleteRoadmapStage);

module.exports = router;