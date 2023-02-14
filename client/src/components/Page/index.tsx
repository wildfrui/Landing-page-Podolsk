import React, { ReactNode } from "react";
import classnames from "classnames";
import styles from "./Page.module.css";

interface PageI {
  children: ReactNode;
}

const Page = ({ children }: PageI) => {
  return <div className={classnames(styles.page)}>{children}</div>;
};

export default Page;
