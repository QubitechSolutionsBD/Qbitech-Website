const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

// CONFIGURE THE APP WITH CONFIG.ENV
dotenv.config({ path: "./config.env" });
const app = require("./app");

// GET LOCAL DB PATH
const DB = process.env.DATABASE_LOCAL;

// CONNECT WITH LOCAL DB (MONGO-DB COMPASS)
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then((con) => {
        console.log("DB connection successful! 📈");
    });

// APP RUNNER WITH SPECIFIC PORT
const port = process.env.PORT || 8000;

// SETUP HEROUKU
if(process.env.NODE_ENV == 'production'){
    app.use(express.static("frontend/build"));
    const paths = require("path");
    app.get("*", (req, res) => {
        res.sendFile(paths.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.listen(port, () => {
    console.log(`\nApp running on port ${port}. 👋`);
});