import styles from "../styles/Home.module.css";
import BlogForm from "../src/components/BlogForm";
import "antd/dist/antd.css";
import BlogsGrid from "../src/components/BlogsGrid";

export default function Home() {
  return (
    <div className={styles.container}>
      <BlogForm />
      <BlogsGrid />
    </div>
  );
}
