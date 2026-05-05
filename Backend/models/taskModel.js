const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {
        type: String,
        enum: ["todo", "in-progress", "completed"],
        default: "todo"
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    deadline: Date
});

module.exports = mongoose.model("Task", taskSchema);