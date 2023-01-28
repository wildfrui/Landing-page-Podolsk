import React, { useEffect } from "react";
import classnames from "classnames";
import Editor from "../Editor";
import styles from "./PostForm.module.css";

const PostForm = () => {
  return (
    <div>
      <div>
        <div className={classnames(styles.container)}>
          <textarea
            className={classnames(styles.title)}
            name=""
            id=""
            cols="40"
            rows="1"
            placeholder="Заголовок"
            maxLength="100"
          ></textarea>
          <div className={classnames(styles.editor)}>
            <Editor></Editor>
          </div>
          <button className={classnames(styles.button)}>Опубликовать</button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
