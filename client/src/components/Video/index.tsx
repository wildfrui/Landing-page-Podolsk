import React from "react";
import classnames from "classnames";
import styles from "./Video.module.css";

const Video = () => {
  return (
    <div className={classnames(styles.container)}>
      <video autoPlay loop muted className={classnames(styles.video)}>
        <source src="/images/city.mp4" type="video/mp4" />
      </video>
    </div>
  );
  //
};

export default Video;
