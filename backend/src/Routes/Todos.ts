import express from "express";
import Todo from "../Controllers/Todos";
import authorization from "../Middlewares/authenticated";
const router = express();

router.post("/post", authorization, Todo.postTodo);
router.put("/update/:id", authorization, Todo.updateTodo);
router.put("/complete/:id", authorization, Todo.completeTodo);
router.delete("/delete/:id", authorization, Todo.deleteTodo);

export default router;
