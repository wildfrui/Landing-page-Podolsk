import React from "react";
import classnames from "classnames";

import PostForm from "../../components/PostForm";
import PostPanel from "../../components/PostPanel";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Support from "../../components/Support";
import styles from "./Admin.module.css";

const links = [
  { name: "ИСТОРИИ", href: "/stories" },
  { name: "СОБЫТИЯ", href: "/events" },
  { name: "КАРТА", href: "/map" },
  { name: "ПРОЕКТ", href: "/about" },
];

const Admin = () => {
  return (
    <>
      <Header solid>
        <Menu mix="header" links={links}></Menu>
        <Logo component="header"></Logo>
        <Support></Support>
      </Header>

      <div className={classnames(styles.container)}>
        <PostForm className={classnames(styles.form)}></PostForm>
        <PostPanel className={classnames(styles.panel)}></PostPanel>
      </div>
    </>
  );
};

export default Admin;
