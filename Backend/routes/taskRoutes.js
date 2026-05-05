const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");
const authMiddleware = require("../middleware/authMiddleware");

// create task (admin only)
router.post("/", authMiddleware, async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Only admin can create tasks" });
        }

        const { title, description, assignedTo, deadline } = req.body;

        const task = new Task({
            title,
            description,
            assignedTo,
            createdBy: req.user.id,
            deadline
        });

        await task.save();

        res.json(task);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get tasks
router.get("/", authMiddleware, async (req, res) => {
    try {
        let tasks;

        if (req.user.role === "admin") {
            tasks = await Task.find().populate("assignedTo");
        } else {
            tasks = await Task.find({ assignedTo: req.user.id });
        }

        res.json(tasks);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update task status
router.patch("/:id", authMiddleware, async (req, res) => {
    try {
        const { status } = req.body;

        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        task.status = status;
        await task.save();

        res.json(task);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;