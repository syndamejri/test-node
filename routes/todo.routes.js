const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo.controller');
const validate = require('../middleware/validate');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', validate, todoController.addNewTodo);
router.delete('/:id', todoController.deleteTodo);
router.put('/:id', todoController.updateTodo);

module.exports = router;