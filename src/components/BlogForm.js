import { Form, FormItem, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import { httpAddNewBlog } from "../hooks/requests";
import styles from "../../styles/BlogForm.module.css";
import useStore from "../zustand/store";
import * as Yup from "yup";

const props = {
  showCount: true,
  size: "large",
};

const BlogForm = () => {
  const addBlog = useStore((state) => state.addBlog);
  const onSubmit = async (values, { resetForm }) => {
    const blog = await httpAddNewBlog(values);
    addBlog(blog);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    author: Yup.string()
      .min(4, "Too short")
      .max(18, "Too Long")
      .required("Required"),
    content: Yup.string().max(800, "Message too long").required("Required"),
  });

  return (
    <div className={styles.blogForm}>
      <Formik
        initialValues={{}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form style={{ width: 500 }}>
            <FormItem name="author">
              <Input
                name="author"
                placeholder="Name"
                maxLength={18}
                {...props}
                className={styles.authorInput}
                suffix={<span />}
              />
            </FormItem>

            <FormItem name="content">
              <Input.TextArea
                name="content"
                placeholder="Message"
                autoSize={{ minRows: 5 }}
                maxLength={800}
                {...props}
                className={styles.contentTextarea}
                suffix={<span />}
              />
            </FormItem>
            <div className={styles.sendButtonWrapper}>
              <SubmitButton shape="round" size="large">
                SEND
              </SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BlogForm;
