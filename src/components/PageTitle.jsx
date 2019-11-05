import React from "react";
import styles from "./PageTitle.module.scss";

const PageTitle = ({ title }) => {
  return (
    <div className={styles.title}>
      <div className={styles.title__name}>{title}</div>
      <div className={styles.title__hr}></div>
    </div>
  );
};

export default PageTitle;
