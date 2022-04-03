const Blogs = require("./blogs.mongo");

const DEFAULT_BLOG_ID = 100;

async function getLatestBlogId() {
  const latestBlog = await Blogs.findOne().sort("-blogId");

  if (!latestBlog) {
    return DEFAULT_BLOG_ID;
  }

  return latestBlog.blogId + 1;
}

async function getAllBlogs() {
  return await Blogs.find({}, { _id: 0, __v: 0 });
}

async function getBlogsCount() {
  return (await getAllBlogs()).length;
}

async function getBlogById(blogId) {
  const blog = await Blogs.findOne({ blogId: blogId }, { _id: 0, __v: 0 });

  if (!blog) {
    return { error: "Blog not found!" };
  }

  return blog;
}

async function addNewBlog(blog) {
  const latestBlogId = await getLatestBlogId();

  const newBlog = { ...blog, blogId: latestBlogId, date: new Date() };
  await Blogs.findOneAndUpdate({ blogId: blog.blogId }, newBlog, {
    upsert: true,
  });
  return newBlog;
}

async function deleteBlogById(blogId) {
  const { deletedCount } = await Blogs.deleteOne({ blogId: blogId });
  if (deletedCount === 1) {
    return { success: true };
  }

  return { error: "Blog not found!" };
}

async function deleteAllBlogs() {
  const blogsCount = getBlogsCount();
  const { deletedCount } = await Blogs.deleteMany({});

  if (deletedCount === blogsCount && deletedCount !== 0) {
    return { success: true };
  }

  return { error: "No blogs to delete!" };
}

module.exports = {
  getAllBlogs,
  getBlogById,
  addNewBlog,
  deleteBlogById,
  deleteAllBlogs,
};
