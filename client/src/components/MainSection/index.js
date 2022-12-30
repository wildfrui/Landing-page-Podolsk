import React from "react";
import classnames from "classnames";
import styles from "./MainSection.module.css";

const MainSection = ({ page, children }) => {
  return (
    <main className={classnames(styles.main, styles[page])}>
      <div className={classnames(styles.container, styles[page])}>
        {children}
      </div>
    </main>
  );
};

export default MainSection;
