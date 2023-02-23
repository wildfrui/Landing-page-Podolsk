import React, { useState } from "react";
import cn from "classnames";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, DialogContent, Typography } from "@mui/material";

import RegisterForm from "./forms/RegisterForm";
import LoginForm from "./forms/LoginForm";
import { FormType } from "enums/FormType";
import { AuthFormI } from "interfaces/AuthFormI";
import FormPaper from "./FormPaper";
import FormField from "components/FormField";
import FormWrapper from "./forms/FormWrapper";
import styles from "./AuthForm.module.css";
import loginValidation from "utils/schemas/loginValidation";
import registerValidation from "utils/schemas/registerValidation";
import MainOptions from "./forms/MainOptions";

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
        {Boolean(conditions.login) ? "Вход в аккаунт" : "Регистрация"}
      </DialogTitle>
      <DialogContent classes={{ root: styles.content }}>
        {formType === FormType.EMAIL_LOGIN && <LoginForm></LoginForm>}
        {formType === FormType.EMAIL_REGISTER && <RegisterForm></RegisterForm>}
        {Boolean(conditions.loginOrRegister) && (
          <MainOptions handleChange={handleChange}></MainOptions>
        )}

        <Typography>
          {Boolean(conditions.login) ? (
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
