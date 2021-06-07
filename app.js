const express = require("express");
const app = express();
const tourRouters = require("./routes/blogRouter");

app.use(express.json());

// REGISTER API ROUTES
app.use("/api/v1/blogs", tourRouters);

module.exports = app;
