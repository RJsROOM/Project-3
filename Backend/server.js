
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToDb= require('./config/database')

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();


app.use(cors());
app.use(express.json());

//routes 
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


connectToDb();




app.listen(3000, () => {
    console.log("Server running on port 3000");
});