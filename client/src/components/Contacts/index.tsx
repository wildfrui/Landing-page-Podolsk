import React from "react";
import classnames from "classnames";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <>
      <div className={classnames(styles.title)}>Связь с нами</div>
      <div className={classnames(styles.icons)}>
        <a href="https://github.com/wildfrui" target="_blank">
          <img src="./images/github.png" alt="" />
        </a>
        <a href="https://www.instagram.com/ravierxasset/" target="_blank">
          <img src="./images/instalogo.png" alt="" />
        </a>
        <a href="https://tlgg.ru/wildfruit" target="_blank">
          <img src="./images/telegramlogo.png" alt="" />
        </a>
        <a href="https://vk.com/ravierxasset" target="_blank">
          <img src="./images/vklogo.png" alt="" />
        </a>
      </div>
    </>
  );
};

export default Contacts;
