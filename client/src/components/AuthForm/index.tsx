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
import Register from "./forms/Register";
import Login from "./forms/Login";
import { FormType } from "enums/FormType";
import { AuthFormI } from "interfaces/AuthFormI";
import styles from "./AuthForm.module.css";
import FormPaper from "./FormPaper";

const AuthForm = ({ open, onClose }: AuthFormI) => {
  const [formType, setFormType] = useState<FormType>(FormType.REGISTER);

  const conditions = {
    login: formType === FormType.LOGIN || formType === FormType.EMAIL_LOGIN,
    loginOrRegister:
      formType === FormType.REGISTER || formType === FormType.LOGIN,
  };

  const handleClose = () => {
    onClose();
  };

  const handleChange = () => {
    if (formType === FormType.REGISTER) {
      setFormType(FormType.EMAIL_REGISTER);
    } else if (formType === FormType.LOGIN) {
      setFormType(FormType.EMAIL_LOGIN);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={({ children }) => <FormPaper>{children}</FormPaper>}
      classes={{ paper: styles.container }}
    >
      <DialogTitle classes={{ root: styles.title }}>
        {conditions.login ? "Вход в аккаунт" : "Регистрация"}
      </DialogTitle>
      <DialogContent classes={{ root: styles.content }}>
        {formType === FormType.EMAIL_LOGIN && <Login></Login>}
        {formType === FormType.EMAIL_REGISTER && <Register></Register>}
        {conditions.loginOrRegister && (
          <div className={cn(styles.options)}>
            <Button
              classes={{ root: styles.option }}
              onClick={() => handleChange()}
            >
              Почта
            </Button>
            <Button classes={{ root: styles.option }}>Google</Button>
            <Button classes={{ root: styles.option }}>ВКонтакте</Button>
          </div>
        )}

        <Typography>
          {conditions.login ? (
            <>
              Нет аккаунта?
              <button
                className={cn(styles.login)}
                onClick={() => setFormType(FormType.REGISTER)}
              >
                Регистрация
              </button>
            </>
          ) : (
            <>
              Есть аккаунт?
              <button
                className={cn(styles.login)}
                onClick={() => setFormType(FormType.LOGIN)}
              >
                Войти
              </button>
            </>
          )}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default AuthForm;
