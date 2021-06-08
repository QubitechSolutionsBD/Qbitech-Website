const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "A blog must have a name"],
        trim: true,  
    },
    description: {
        type: String,
        required: [true, "A blog must have description"],
        trim: true,
    },
    imageCover: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});


const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
