const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    roadmapId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Roadmap'
    },
    skills: [{
        skillId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Skill'
        },
        completed: {
            type: Boolean,
            default: false
        },
        completionDate: {
            type: Date
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Progress', progressSchema);