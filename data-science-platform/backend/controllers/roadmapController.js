const Roadmap = require('../models/Roadmap');

// Get all roadmap stages
exports.getRoadmapStages = async (req, res) => {
    try {
        const stages = await Roadmap.find();
        res.status(200).json(stages);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving roadmap stages', error });
    }
};

// Get roadmap stage by ID
exports.getRoadmapStageById = async (req, res) => {
    const { id } = req.params;
    try {
        const stage = await Roadmap.findById(id);
        if (!stage) {
            return res.status(404).json({ message: 'Roadmap stage not found' });
        }
        res.status(200).json(stage);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving roadmap stage', error });
    }
};

// Create a new roadmap stage
exports.createRoadmapStage = async (req, res) => {
    const newStage = new Roadmap(req.body);
    try {
        const savedStage = await newStage.save();
        res.status(201).json(savedStage);
    } catch (error) {
        res.status(400).json({ message: 'Error creating roadmap stage', error });
    }
};

// Update a roadmap stage
exports.updateRoadmapStage = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedStage = await Roadmap.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStage) {
            return res.status(404).json({ message: 'Roadmap stage not found' });
        }
        res.status(200).json(updatedStage);
    } catch (error) {
        res.status(400).json({ message: 'Error updating roadmap stage', error });
    }
};

// Delete a roadmap stage
exports.deleteRoadmapStage = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStage = await Roadmap.findByIdAndDelete(id);
        if (!deletedStage) {
            return res.status(404).json({ message: 'Roadmap stage not found' });
        }
        res.status(200).json({ message: 'Roadmap stage deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting roadmap stage', error });
    }
};