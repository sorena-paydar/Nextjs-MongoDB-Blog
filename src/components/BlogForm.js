import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import { httpAddNewBlog } from "../hooks/requests";

const BlogForm = () => {
  const onSubmit = async (values, { resetForm }) => {
    await httpAddNewBlog(values);

    setTimeout(() => resetForm(), 500);
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={onSubmit}
      render={() => (
        <Form>
          <Input name="author" placeholder="Name" />

          <Input name="content" placeholder="Content" />

          <SubmitButton>SEND</SubmitButton>
        </Form>
      )}
    />
  );
};

export default BlogForm;
