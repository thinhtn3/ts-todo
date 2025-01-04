import mongoose from "mongoose";

interface ToDo extends mongoose.Document { //Inherit from mongoose.Document
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const ToDoModel = mongoose.model<ToDo>("Todo", todoSchema);
export default ToDoModel;