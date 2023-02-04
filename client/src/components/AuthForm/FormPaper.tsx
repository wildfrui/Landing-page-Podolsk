import React, { ReactNode } from "react";
import { Paper, Typography } from "@mui/material";
import styles from "./AuthForm.module.css";

interface FormPaperI {
  children?: ReactNode;
}

const FormPaper = ({ children }: FormPaperI) => {
  return (
    <>
      <Paper classes={{ root: styles.background }}></Paper>
      <Paper classes={{ root: styles.container }}>{children}</Paper>
    </>
  );
};

export default FormPaper;
