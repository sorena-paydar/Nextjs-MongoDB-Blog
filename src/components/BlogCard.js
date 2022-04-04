import styles from "../../styles/BlogCard.module.css";
import timeElapsed from "../../utils/timeElapsed";
import { httpDeleteBlogById } from "../hooks/requests";

const BlogCard = ({ blog }) => {
  const { blogId, author, content, date } = blog;

  const dateObj = new Date(date);

  const timestamp = dateObj.getTime();

  const localDate = dateObj.toLocaleDateString();

  const timeDiff = timeElapsed(timestamp);

  const deleteHandler = async () => {
    const res = await httpDeleteBlogById(blogId);
    console.log(res);
  };

  return (
    <li className={styles.blogCard}>
      <div className={styles.blogDetails}>
        <span className={styles.author}>{author}</span>
        <span className={styles.date}>
          {localDate} · {timeDiff}
        </span>
      </div>

      <div className={styles.blogContainer}>
        <span className={styles.content}>{content}</span>
        <button className={styles.deleteButton} onClick={deleteHandler}>
          DELETE
        </button>
      </div>
    </li>
  );
};

export default BlogCard;
