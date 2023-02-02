import React, { ReactNode } from "react";
import { Paper, Typography } from "@mui/material";
import styles from "./AuthForm.module.css";

interface FormPaperI {
  children?: ReactNode;
}

const FormPaper = ({ children }: FormPaperI) => {
  //   const handleClose = () => {
  //     onClose();
  //   };

  //   const handleChangeType = () => {
  //     setFormType(FormType.LOGIN);
  //   };
  return (
    <>
      <Paper classes={{ root: styles.background }}>
        {/* <Typography classes={{ root: styles.background__logo }}>
        </Typography> */}
      </Paper>
      <Paper classes={{ root: styles.container }}>{children}</Paper>
    </>
  );
};

export default FormPaper;
