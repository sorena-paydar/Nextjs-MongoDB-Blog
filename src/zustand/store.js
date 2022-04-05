import create from "zustand";

const useStore = create((set) => ({
  blogs: [],
  addBlog: (blog) => set((state) => ({ blogs: [...state.blogs, blog] })),
  addBlogs: (fetchedBlogs) =>
    set((state) => ({ blogs: [...state.blogs, ...fetchedBlogs] })),
  deleteBlog: (blogId) =>
    set((state) => {
      const blogs = state.blogs.filter(function (blog) {
        return blog.blogId !== blogId;
      });
      return { blogs: blogs };
    }),
}));

export default useStore;
