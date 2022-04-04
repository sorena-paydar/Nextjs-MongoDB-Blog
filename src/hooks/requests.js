async function httpGetAllBlogs() {
  const response = await fetch(proccess.env.API_URL);
  return await response.json();
}

async function httpGetBlogById(blogId) {
  const response = await fetch(`${proccess.env.API_URL}/${blogId}`);
  return await response.json();
}

async function httpAddNewBlog(blog) {
  const response = await fetch(process.env.API_URL, {
    method: "POST",
    body: JSON.stringify(blog),
  });
  return await response.json();
}

async function httpDeleteAllBlogs() {
  const response = await fetch(proccess.env.API_URL);
  return await response.json();
}

async function httpDeleteBlogById(blogId) {
  const response = await fetch(`${proccess.env.API_URL}/${blogId}`);
  return await response.json();
}

export {
  httpGetAllBlogs,
  httpGetBlogById,
  httpAddNewBlog,
  httpDeleteAllBlogs,
  httpDeleteBlogById,
};
