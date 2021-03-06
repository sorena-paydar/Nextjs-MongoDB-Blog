import {
  addNewBlog,
  deleteAllBlogs,
  getAllBlogs,
} from "../../models/blogs.model";

import mongoConnect from "../../utils/mongo";
import { getPagination } from "../../utils/query";
import validateBlog from "../../utils/validator";

mongoConnect();

export default async function httpBlogsHandler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case "GET":
      try {
        const { limit, skip } = getPagination(query);
        res.status(200).json(await getAllBlogs(limit, skip));
      } catch (err) {
        res.status(400).json({ error: "An error occurred!" });
      }
      break;

    case "POST":
      const blog = JSON.parse(body);
      try {
        if (validateBlog(blog)) {
          res.status(201).json(await addNewBlog(blog));
        } else {
          res.status(400).json({ error: "Missing required properties!" });
        }
      } catch (err) {
        res.status(400).json({ error: "An error occurred!" });
      }

      break;

    case "DELETE":
      try {
        res.status(200).json(await deleteAllBlogs());
      } catch (err) {
        res.status(400).json({ error: "An error occurred!" });
      }
      break;
  }
}
