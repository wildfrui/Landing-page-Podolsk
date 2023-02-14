import React, { ReactNode } from "react";
import classnames from "classnames";
import styles from "./MainSection.module.css";

interface MainSectionI {
  page: string;
  children: ReactNode;
}

const MainSection = ({ page, children }: MainSectionI) => {
  return (
    <main className={classnames(styles.main, styles[page])}>
      <div className={classnames(styles.container, styles[page])}>
        {children}
      </div>
    </main>
  );
};

export default MainSection;
