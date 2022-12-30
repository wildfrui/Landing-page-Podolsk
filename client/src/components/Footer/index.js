import React from "react";
import classnames from "classnames";
import styles from "./Footer.module.css";

const Footer = ({ children }) => {
  return (
    <footer className={classnames(styles.footer)}>
      <div className={classnames(styles.container)}>{children}</div>
    </footer>
  );
};

export default Footer;
