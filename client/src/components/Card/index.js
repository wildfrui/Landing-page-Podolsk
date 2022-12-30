import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ title, text, id, image, component }) => {
  return (
    <div
      className={classnames(styles.card, styles[component])}
      style={{ backgroundImage: `${image}` }}
    >
      <div className={classnames(styles.inner)}>
        <Link className={classnames(styles.link)} to={id}>
          <h3 className={classnames(styles.title)}>{title}</h3>
          <p className={classnames(styles.text)}>{text}</p>
          <div className={classnames(styles.layer)}></div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
