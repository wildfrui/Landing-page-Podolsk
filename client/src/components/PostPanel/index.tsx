import React from "react";
import classnames from "classnames";

import styles from "./PostPanel.module.css";

const options = ["События", "Истории"];

const PostPanel = () => {
  return (
    <div className={classnames(styles.container)}>
      <h3 className={classnames(styles.title)}>Выбор раздела</h3>
      <ul className={classnames(styles.options)}>
        {options.map((option) => {
          return <li className={classnames(styles.option)}>{option}</li>;
        })}
      </ul>
      <h3 className={classnames(styles.title)}>Выбор обложки</h3>
      <input type="file" />
    </div>
  );
};

export default PostPanel;
