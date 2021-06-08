const Blog = require("../models/blogModel");

// -------------- GET ALL POST -----------
exports.getAllBlogs = async (req, res) => {
  try {
    // 1) Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "limit"];
    excludeFields.forEach((el) => delete queryObj[el]);

    // 2) EXECUTE QUERY THEN SORT AND SAVE ALL POSTS
    let query = Blog.find();
    query = query.sort("-createdAt")
    const allBlog = await query;

    // 4) PAGINATION
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numBlogs = await Blog.countDocuments();
      if (skip >= numBlogs) throw new Error("This page does not exist.");
    }

    // 4) EXCLUDE OBJECTS
    const blogs = await query;

    // 5) SEND RESPONCE
    res.status(200).json({
      status: "success",
      data: {
        page: Math.ceil(allBlog.length / 20),
        blogs,
        latestBlogs: allBlog[0],
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// -------------- CREATE A POST -----------
exports.createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    
    res.status(201).json({
      status: "success",
      data: {
        blog: newBlog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};


exports.getApost = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}