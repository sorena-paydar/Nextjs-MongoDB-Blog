const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  blogId: {
    required: true,
    type: Number,
  },
  author: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
});

module.exports = mongoose.models.blog || mongoose.model("blog", blogsSchema);
