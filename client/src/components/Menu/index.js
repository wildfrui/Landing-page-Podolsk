import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import styles from "./Menu.module.css";

const Menu = ({ mix, links }) => {
  return (
    <>
      <div className={classnames(styles.menu, styles[mix])}>
        {links.map((link) => {
          return (
            <Link to={link.href} className={classnames(styles.link)}>
              {link.name}
            </Link>
          );
        })}
        {/* <a className={classnames(styles.link)} href="">
          ИСТОРИИ
        </a>
        <a className={classnames(styles.link)} href="">
          СОБЫТИЯ
        </a>
        <a className={classnames(styles.link)} href="">
          КАРТА
        </a>
        <a className={classnames(styles.link)} href="">
          ПРОЕКТ
        </a> */}
      </div>
    </>
  );
};

export default Menu;
