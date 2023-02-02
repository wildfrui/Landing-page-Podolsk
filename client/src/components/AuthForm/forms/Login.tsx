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
import styles from "./Forms.module.css";

const Login = () => {
  return (
    <>
      <DialogContentText classes={cn(styles.title)}></DialogContentText>
      <TextField
        margin="dense"
        id="name"
        label="Почта"
        type="email"
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        id="name"
        label="Пароль"
        type="password"
        fullWidth
        variant="standard"
      />
      <div className={cn(styles.container)}>
        <button className={cn(styles.button)}>Войти</button>
      </div>
    </>
  );
};

export default Login;
