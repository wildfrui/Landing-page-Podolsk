import React from "react";
import classnames from "classnames";
import styles from "./Title.module.css";

interface TitleI {
  text: string;
  page: string;
}

const Title = ({ text, page }: TitleI) => {
  return <h1 className={classnames(styles.title, styles[page])}>{text}</h1>;
};

export default Title;
