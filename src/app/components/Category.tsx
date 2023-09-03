import React from "react";
import styles from "../page.module.css";

const Category: React.FC = () => {
  return (
    <>
      <div className={styles.mainBanner}>
        <p>#NightFlea</p>
      </div>
      <div className={styles.categoryBar}>
        <button>Products</button>
      </div>
    </>
  );
};

export default Category;
