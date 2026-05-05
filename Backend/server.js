
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectToDb = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, "dist");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(distPath));

app.get("/{*path}", (req, res) => {
    if (req.path.startsWith("/api/")) {
        return res.status(404).json({ message: "API route not found" });
    }

    res.sendFile(path.join(distPath, "index.html"));
});

const startServer = async () => {
    try {
        await connectToDb();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server failed to start", error.message);
        process.exit(1);
    }
};

startServer();
