import styles from "../styles/Home.module.css";
import BlogForm from "../src/components/BlogForm";
import "antd/dist/antd.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <BlogForm />
    </div>
  );
}
