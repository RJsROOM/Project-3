
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToDb= require('./config/database')

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);


connectToDb();




app.listen(3000, () => {
    console.log("Server running on port 3000");
});
