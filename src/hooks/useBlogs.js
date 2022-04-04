import { useEffect, useState } from "react";

import { httpGetAllBlogs } from "./requests";

function useBlogs() {
  const [blogs, saveBlogs] = useState([]);

  useEffect(async () => {
    const fetchedBlogs = await httpGetAllBlogs();
    saveBlogs(fetchedBlogs);
  }, [blogs, saveBlogs]);

  return blogs;
}

export default useBlogs;
