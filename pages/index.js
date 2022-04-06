import BlogForm from "../src/components/BlogForm";
import "antd/dist/antd.css";
import BlogsGrid from "../src/components/BlogsGrid";
import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <BlogForm />
        <BlogsGrid />
      </div>
    </Layout>
  );
}
