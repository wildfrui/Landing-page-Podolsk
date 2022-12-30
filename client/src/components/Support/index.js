import React from "react";
import classnames from "classnames";
import styles from "./Support.module.css";

const Support = () => {
  return (
    <a
      className={classnames(styles.support)}
      href="https://github.com/wildfrui/LandingPodolsk"
      target="_blank"
    >
      Поддержать проект
    </a>
  );
};

export default Support;
