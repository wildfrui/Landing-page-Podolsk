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
import { useForm } from "react-hook-form";
import styles from "./Forms.module.css";

// interface RegisterFormI {
//   email?: string;
//   password?: string;
// }

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <DialogContentText classes={cn(styles.title)}></DialogContentText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          margin="dense"
          id="name"
          label="Почта"
          type="email"
          fullWidth
          variant="standard"
          {...register("example")}
        />
        <TextField
          margin="dense"
          id="password"
          label="Пароль"
          type="password"
          fullWidth
          variant="standard"
          {...register("password")}
        />

        {/* <TextField
        margin="dense"
        id="name"
        label="Повторите пароль"
        type="email"
        fullWidth
        variant="standard"
      /> */}
        <div className={cn(styles.container)}>
          <button type="submit" className={cn(styles.button)}>
            Войти
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
