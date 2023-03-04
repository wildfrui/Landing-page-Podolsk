import React, { useEffect } from "react";
import classnames from "classnames";
import EditorJS, { OutputBlockData, OutputData } from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import styles from "./Editor.module.css";

// interface EditorI {
//   onChange: (blocks: OutputData["blocks"]) => void;
// }

const Editor = ({ onChange }) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      autofocus: true,
      placeholder: "Введите текст статьи",
      async onChange(e) {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
      tools: {
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:5000/posts/image",
            },
            field: "file",
          },
        },
      },
    });
    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error("Error editor cleanup", e));
    };
  }, []);

  return <div id="editor"></div>;
};

export default Editor;
