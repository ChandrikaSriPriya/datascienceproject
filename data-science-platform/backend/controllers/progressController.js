const Progress = require('../models/Progress');

// Create or update user progress
exports.updateProgress = async (req, res) => {
    const { userId, skillId, progress } = req.body;

    try {
        let userProgress = await Progress.findOne({ userId, skillId });

        if (userProgress) {
            // Update existing progress
            userProgress.progress = progress;
            await userProgress.save();
            return res.status(200).json({ message: 'Progress updated successfully', userProgress });
        } else {
            // Create new progress entry
            userProgress = new Progress({ userId, skillId, progress });
            await userProgress.save();
            return res.status(201).json({ message: 'Progress created successfully', userProgress });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Get user progress for a specific skill
exports.getProgress = async (req, res) => {
    const { userId, skillId } = req.params;

    try {
        const userProgress = await Progress.findOne({ userId, skillId });

        if (!userProgress) {
            return res.status(404).json({ message: 'Progress not found' });
        }

        return res.status(200).json(userProgress);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Get all progress for a user
exports.getAllProgress = async (req, res) => {
    const { userId } = req.params;

    try {
        const progressList = await Progress.find({ userId });

        return res.status(200).json(progressList);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};