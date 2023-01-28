import React, { useEffect } from "react";
import classnames from "classnames";
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import styles from "./Editor.module.css";

const Editor = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      autofocus: true,
      placeholder: "Введите текст статьи",
      tools: {
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "local",
            },
          },
        },
      },
    });
  }, []);

  return <div id="editor"></div>;
};

export default Editor;
