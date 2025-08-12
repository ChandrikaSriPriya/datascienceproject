const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a new role
router.post('/', authMiddleware, roleController.createRole);

// Route to get all roles
router.get('/', authMiddleware, roleController.getAllRoles);

// Route to get a specific role by ID
router.get('/:id', authMiddleware, roleController.getRoleById);

// Route to update a role by ID
router.put('/:id', authMiddleware, roleController.updateRole);

// Route to delete a role by ID
router.delete('/:id', authMiddleware, roleController.deleteRole);

module.exports = router;