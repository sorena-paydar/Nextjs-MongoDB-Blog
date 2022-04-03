import { deleteBlogById, getBlogById } from "../../../models/blogs.model";
import mongoConnect from "../../../utils/mongo";

mongoConnect();

export default async function httpBlogIdHandler(req, res) {
  const {
    method,
    query: { blogId },
  } = req;

  switch (method) {
    case "GET":
      try {
        res.status(200).json(await getBlogById(blogId));
      } catch (err) {
        res.status(400).json({ error: "An error occurred!" });
      }
      break;

    case "DELETE":
      if (blogId) {
        res.status(200).json(await deleteBlogById(Number(blogId)));
      } else {
        res.status(400).json({ error: "Missing required query param!" });
      }
      break;
  }
}
