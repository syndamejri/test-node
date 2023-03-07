const Todo = require("../models/todo")

exports.getAllTodos =  async (req, res) => {
  try {
    const data = await Todo.find({});
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const data = await Todo.findById(req.params.id);
    res.send(data)  
  } catch (error) {
    console.log(error);
  }
}

exports.addNewTodo = async (req, res, next) => {
  console.log("resultat :" + JSON.stringify(req.body));
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(200).send(todo);
  } catch (err) {
    console.log(err);
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id);
    res.send("Task Deleted")
  } catch (error) {
    console.log(error);
  }
}

exports.updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send("Task Updated")
  } catch (error) {
    console.log(error);
  }
}