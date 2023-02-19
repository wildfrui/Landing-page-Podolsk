import React, { useState } from "react";
import classnames from "classnames";
import styles from "./Support.module.css";
import { AuthForm } from "components/AuthForm";

const Support = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    // <a
    //   className={classnames(styles.support)}
    //   href="https://github.com/wildfrui/LandingPodolsk"
    //   target="_blank"
    // >
    //   Поддержать проект
    // </a>
    // <a
    //   className={classnames(styles.support)}
    //   href="https://github.com/wildfrui/LandingPodolsk"
    //   target="_blank"
    // >
    //   Авторизоваться
    // </a>
    <>
      <button className={styles.button} onClick={() => handleClick()}>Авторизоваться</button>
      <AuthForm open={open} onClose={handleClose}></AuthForm>
    </>
  );
};

export default Support;
