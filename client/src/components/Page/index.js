import React from "react";
import classnames from "classnames";
import styles from "./Page.module.css";

const Page = ({ children }) => {
  return <div className={classnames(styles.page)}>{children}</div>;
};

export default Page;
