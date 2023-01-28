import classnames from "classnames";
import styles from "./ImageEditor.module.css";

export default class ImageEditor {
  constructor({ data }) {
    this.data = data;
  }

  static get toolbox() {
    return {
      title: "Фото",
      //   icon: "/images/image.png",
    };
  }
  render() {}
  save(blockContent) {
    return {
      url: blockContent.value,
    };
  }
}
