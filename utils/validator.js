function validateBlog(blog) {
  if (!blog.author || !blog.content) {
    return false;
  }

  return true;
}

module.exports = validateBlog;
