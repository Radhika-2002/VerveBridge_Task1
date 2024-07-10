const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
require("dotenv").config();

const port = process.env.PORT || 3000;
const mongoUrl = process.env.mongoUrl;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send({
        message: "API is working now"
    });
});

mongoose.connect(mongoUrl)
    .then(() => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server is running on port number ${port}`);
        });
    })
    .catch(error => {
        console.error("Database connection error:", error);
    });
