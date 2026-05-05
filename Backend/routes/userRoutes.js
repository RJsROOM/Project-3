const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { verifyToken, authorizeRole } = require("../middleware/authMiddleware");

router.get("/employees", verifyToken, authorizeRole("admin"), async (req, res) => {
    try {
        const users = await User.find({
            role: { $in: ["employee", "member"] }
        }).select("name email role");

        const employees = [];

        for (const user of users) {
            if (user.role === "member") {
                user.role = "employee";
                await user.save();
            }

            employees.push({
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            });
        }

        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
