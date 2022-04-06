import styles from "../../styles/Navbar.module.css";
import { httpDeleteAllBlogs } from "../hooks/requests";
import useStore from "../zustand/store";
import { Button } from "antd";

const Navbar = () => {
  // const deleteBlogs = useStore((state) => state.deleteBlogs);
  // const deleteAllHandler = async () => {
  //   const res = await httpDeleteAllBlogs();
  //   deleteBlogs();
  //   console.log(res);
  // };

  return (
    <div className={styles.navbar}>
      <span className={styles.navBrand}>veryBlog</span>
      <div className={styles.controlls}>
        {/* <Button
          type="primary"
          size="large"
          shape="round"
          danger
          onClick={deleteAllHandler}
        >
          DELETE ALL BLOGS
        </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
