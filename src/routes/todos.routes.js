const {Router} = require('express');
const { getTodosWithCategories, getAllTodos, getTodosById, createTodos, updateTodos, deleteTodos } = require('../controllers/todos.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();


//controller
router.get('/todos', authMiddleware, getAllTodos);
router.get("/todos/:id", getTodosById);
router.get('/todos/:id/categories', getTodosWithCategories);
router.post("/todos", createTodos);
router.put("/todos/:id", updateTodos);
router.delete("/todos/:id", deleteTodos);


module.exports = router; 