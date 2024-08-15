import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  updateTime: {
    type: String,
  },
  setTime: {
    type: String,
  },
  isComplete: {
    type: Boolean,
  },
});
const todoModel = mongoose.model("Todo", todoSchema);
export default todoModel;
