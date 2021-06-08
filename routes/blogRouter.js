const express = require("express");
const blogController = require("../controllers/blogControllers");
const router = express.Router();

// ACCESS CONTROLL
// router.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTER
router
  .route("/")
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog)

router
  .route("/:id")
  .get(blogController.getApost)

module.exports = router;