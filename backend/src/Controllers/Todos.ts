import { Request, Response } from "express";
import Todo from "../Models/Todos";
import User from "../Models/Auth";

const postTodo = async (req: any, res: Response) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
      notes: req.body.notes,
      setTime: Date.now(),
      isComplete: false,
    });

    await newTodo.save();
    const isUser = await User.findOne({ email: req.user.email });
    if (!isUser) return res.status(404).json({ message: "User not found!" });
    isUser.todos.push(newTodo._id);
    await isUser.save();
    return res.status(200).json({ message: "Todo added", Data: newTodo });
  } catch (error) {
    return error;
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const isTodo = await Todo.findById(req.params.id);
    if (!isTodo) return res.status(404).json({ message: "Todo not found!" });

    const updateTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title || isTodo.title,
        description: req.body.description || isTodo.description,
        notes: req.body.notes || isTodo.notes,
        updateTime: Date.now(),
      },
      { new: true }
    );

    updateTodo?.save();
    return res
      .status(200)
      .json({ message: "Todo updated succesfully", Data: updateTodo });
  } catch (error) {
    return error;
  }
};

const completeTodo = async (req: Request, res: Response) => {
  try {
    const isTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        isComplete: true,
        updateTime: Date.now(),
      },
      { new: true }
    );
    if (!isTodo) return res.status(404).json({ message: "Todo not found!" });
    return res
      .status(200)
      .json({ message: "Todo updated succesfully", Data: isTodo });
  } catch (error) {
    return error;
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const isTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!isTodo) return res.status(404).json({ message: "Can't delete!" });
    return res
      .status(200)
      .json({ message: "Todo deleted succesfully", Data: isTodo });
  } catch (error) {
    return error;
  }
};

const getTodosOfUser = async (req: any, res: Response) => {
  try {
    const isUser = await User.findOne({ email: req.user.email }).populate(
      "todos"
    );
    if (!isUser) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ data: isUser.todos });
  } catch (error) {
    return error;
  }
};

export default {
  postTodo,
  updateTodo,
  completeTodo,
  deleteTodo,
  getTodosOfUser,
};
