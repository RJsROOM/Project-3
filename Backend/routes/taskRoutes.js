const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");
const User = require("../models/userModel");
const { verifyToken, authorizeRole } = require("../middleware/authMiddleware");

router.post("/", verifyToken, authorizeRole("admin"), async (req, res) => {
    try {
        const { title, category, description, assignedTo, deadline } = req.body;

        if (!assignedTo) {
            return res.status(400).json({ message: "assignedTo is required" });
        }

        const assignedUser = await User.findById(assignedTo);

        if (!assignedUser) {
            return res.status(404).json({ message: "Assigned user not found" });
        }

        if (assignedUser.role === "member") {
            assignedUser.role = "employee";
            await assignedUser.save();
        }

        if (assignedUser.role !== "employee") {
            return res.status(400).json({ message: "Tasks can only be assigned to employees" });
        }

        const task = new Task({
            title,
            category,
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

router.get("/", verifyToken, async (req, res) => {
    try {
        let tasks;

        if (req.user.role === "admin") {
            tasks = await Task.find()
                .populate("assignedTo", "name email role")
                .populate("createdBy", "name role");
        } else if (req.user.role === "employee") {
            tasks = await Task.find({ assignedTo: req.user.id })
                .populate("assignedTo", "name email role")
                .populate("createdBy", "name role");
        } else {
            return res.status(403).json({ message: "Access denied" });
        }

        res.json(tasks);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.patch("/:id", verifyToken, async (req, res) => {
    try {
        const { status } = req.body;
        const allowedStatuses = ["todo", "in-progress", "completed"];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        if (req.user.role === "employee" && task.assignedTo.toString() !== req.user.id) {
            return res.status(403).json({ message: "You can only update your own tasks" });
        }

        if (req.user.role !== "admin" && req.user.role !== "employee") {
            return res.status(403).json({ message: "Access denied" });
        }

        task.status = status;
        await task.save();

        res.json(task);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
