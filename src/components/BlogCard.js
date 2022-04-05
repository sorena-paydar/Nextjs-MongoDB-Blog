import styles from "../../styles/BlogCard.module.css";
import timeElapsed from "../../utils/timeElapsed";
import { httpDeleteBlogById } from "../hooks/requests";
import useStore from "../zustand/store";

const BlogCard = ({ blog }) => {
  const { blogId, author, content, date } = blog;

  const dateObj = new Date(date);

  const timestamp = dateObj.getTime();

  const localDate = dateObj.toLocaleDateString();

  const timeDiff = timeElapsed(timestamp);

  const deleteBlog = useStore((state) => state.deleteBlog);

  const deleteHandler = async () => {
    const res = await httpDeleteBlogById(blogId);
    deleteBlog(blogId);
    console.log(res);
  };

  return (
    <li className={styles.blogCard}>
      <div className={styles.header}>
        <div>
          <span className={styles.author}>{author}</span>
          <span className={styles.date}>
            {localDate} • {timeDiff}
          </span>
        </div>

        <button className={styles.deleteButton} onClick={deleteHandler}>
          DELETE
        </button>
      </div>

      <div className={styles.blogContent}>
        <span className={styles.content}>{content}</span>
      </div>
    </li>
  );
};

export default BlogCard;
