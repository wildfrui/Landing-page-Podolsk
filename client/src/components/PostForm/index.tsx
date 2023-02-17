import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Editor from "../Editor";
import styles from "./PostForm.module.css";
import { OutputBlockData, OutputData } from "@editorjs/editorjs";
import { xhrCreatePost } from "api/postsApi";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState<OutputBlockData<string, any>[]>([]);

  const onAddPost = async () => {
    try {
      const post = await xhrCreatePost({
        postTitle: title,
        postDescription: title,
        body: blocks,
        category: "events",
      });
      console.log(post);
    } catch (e) {
      console.warn(e);
    }
  };

  const onChangeBlocks = (arr: OutputData["blocks"]) => {
    setBlocks(arr);
  };

  return (
    <div>
      <div>
        <div className={classnames(styles.container)}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название статьи"
          />
          <div className={classnames(styles.editor)}>
            <Editor onChange={onChangeBlocks}></Editor>
          </div>
          <button className={classnames(styles.button)} onClick={onAddPost}>
            Опубликовать
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
