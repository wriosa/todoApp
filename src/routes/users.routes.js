const {Router} = require('express');
const { getAllUsers, getUserById, createUser } = require('../controllers/users.controller');
const router = Router();

//controller
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);

module.exports = router;