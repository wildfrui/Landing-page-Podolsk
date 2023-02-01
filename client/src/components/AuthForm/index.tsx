import React, { useState } from "react";
import cn from "classnames";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormType } from "enums/FormType";
import { AuthFormI } from "interfaces/AuthFormI";
import styles from "./AuthForm.module.css";
import FormPaper from "./FormPaper";

const AuthForm = ({ open, onClose }: AuthFormI) => {
  const [formType, setFormType] = useState<FormType>(FormType.MAIN);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={({ children }) => <FormPaper>{children}</FormPaper>}
      classes={{ paper: styles.container }}
    >
      <DialogTitle classes={{ root: styles.title }}>Регистрация</DialogTitle>
      <DialogContent classes={{ root: styles.content }}>
        <div className={cn(styles.options)}>
          <Button classes={{ root: styles.option }}>Почта</Button>
          <Button classes={{ root: styles.option }}>Google</Button>
          <Button classes={{ root: styles.option }}>ВКонтакте</Button>
        </div>
        <Typography>Есть аккаунт? Войти</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default AuthForm;
