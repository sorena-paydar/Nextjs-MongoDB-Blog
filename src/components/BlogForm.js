import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import { httpAddNewBlog } from "../hooks/requests";
import styles from "../../styles/BlogForm.module.css";
import useStore from "../zustand/store";

const styleProps = {
  style: {
    marginBottom: 10,
  },
};

const BlogForm = () => {
  const addBlog = useStore((state) => state.addBlog);
  const onSubmit = async (values, { resetForm }) => {
    const blog = await httpAddNewBlog(values);
    addBlog(blog);
    resetForm();
  };

  return (
    <div className={styles.blogForm}>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {() => (
          <Form>
            <Input name="author" placeholder="Name" {...styleProps} />
            <Input.TextArea
              name="content"
              placeholder="Message"
              rows={5}
              {...styleProps}
            />
            <SubmitButton>SEND</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BlogForm;
