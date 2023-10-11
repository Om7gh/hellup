const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "entrer le titre de l'article"],
  },
  subtitle: {
    type: String,
    required: [true, "entrer un subtitle de l'article"],
  },
  content: {
    type: String,
    required: [true, "entrer le contenue de l'article"],
  },
  image: {
    type: String,
    required: [true, "entrer une image pour l'article"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Blogs = mongoose.model("Blogs", blogSchema);

module.exports = Blogs;
