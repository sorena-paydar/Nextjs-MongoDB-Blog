import { useEffect } from "react";
import useStore from "../zustand/store";

import { httpGetAllBlogs } from "./requests";

function useBlogs() {
  const blogs = useStore((state) => state.blogs);
  const addBlogs = useStore((state) => state.addBlogs);

  useEffect(async () => {
    const fetchedBlogs = await httpGetAllBlogs();
    addBlogs(fetchedBlogs);
  }, []);

  return blogs;
}

export default useBlogs;
