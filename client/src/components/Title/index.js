import React from "react";
import classnames from "classnames";
import styles from "./Title.module.css";

const Title = ({ text, page }) => {
  return <h1 className={classnames(styles.title, styles[page])}>{text}</h1>;
};

export default Title;
