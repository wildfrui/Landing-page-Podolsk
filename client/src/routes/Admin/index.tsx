import React from "react";
import classnames from "classnames";

import PostForm from "components/PostForm";
import PostPanel from "components/PostPanel";
import MainLayout from "layouts/MainLayout";
import styles from "./Admin.module.css";

const Admin = () => {
  return (
    <MainLayout>
      <div className={classnames(styles.container)}>
        <PostForm></PostForm>
        <PostPanel></PostPanel>
      </div>
    </MainLayout>
  );
};

export default Admin;
