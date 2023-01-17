const {Router} = require('express');
const { getAllUsers, getUserById, createUser, getUserWithTasks, getUserWithCategories } = require('../controllers/users.controller');
const router = Router();

//controller
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
//obtener a un usuario con sus tareas
router.get('/users/:id/todos', getUserWithTasks);
router.get('/users/:id/categories', getUserWithCategories);
router.post('/users', createUser); 

module.exports = router;