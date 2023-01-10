const {Router} = require('express');
const { getAllUsers, getUserById } = require('../controllers/users.controller');
const router = Router();

//controller
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

module.exports = router;