import React from "react";
import cn from "classnames";
import { DialogContentText, TextField } from "@mui/material";
import FormField from "../../FormField";
import styles from "./Forms.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import loginValidation from "utils/schemas/loginValidation";

const LoginForm = () => {
  const loginForm = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginValidation),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = loginForm;

  console.log(errors);

  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <DialogContentText classes={cn(styles.title)}></DialogContentText>
      <FormProvider {...loginForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" focused></FormField>
          <FormField name="password" label="Пароль"></FormField>
          <div className={cn(styles.container)}>
            <button className={cn(styles.button)}>Войти</button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default LoginForm;
