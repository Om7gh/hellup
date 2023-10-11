const express = require("express");
const {
  createBlogs,
  getBlogs,
  getSingleBlogs,
  updateBlogs,
  deleteBlogs,
  checkId,
} = require("../controller/blogController");
const router = express.Router();

router.param("id", checkId);

router.route("/").post(createBlogs).get(getBlogs);
router.route("/:id").get(getSingleBlogs).patch(updateBlogs).delete(deleteBlogs);

module.exports = router;
