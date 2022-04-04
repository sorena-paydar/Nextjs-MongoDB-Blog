import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import { httpAddNewBlog } from "../hooks/requests";
import styles from "../../styles/BlogForm.module.css";

const styleProps = {
  style: {
    marginBottom: 10,
  },
};

const BlogForm = () => {
  const onSubmit = async (values, { resetForm }) => {
    await httpAddNewBlog(values);

    setTimeout(() => resetForm(), 500);
  };

  return (
    <div className={styles.blogForm}>
      <Formik
        initialValues={{}}
        onSubmit={onSubmit}
        render={() => (
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
      />
    </div>
  );
};

export default BlogForm;
