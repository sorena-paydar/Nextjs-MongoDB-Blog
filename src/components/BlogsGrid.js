import styles from "../../styles/BlogsGrid.module.css";
import useBlogs from "../hooks/useBlogs";
import BlogCard from "./BlogCard";

const BlogsGrid = () => {
  const blogs = useBlogs();

  return (
    <ul className={styles.blogsGrid}>
      {blogs &&
        blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)}
    </ul>
  );
};

export default BlogsGrid;
