import React, { useState } from "react";
import cn from "classnames";
import { Alert, DialogContentText } from "@mui/material";
import FormField from "../../FormField";
import styles from "./Forms.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import loginValidation from "utils/schemas/loginValidation";
import { xhrLoginUser } from "api/userApi";
import { LoginUserDto } from "interfaces/LoginUserDto";
import { setCookie } from "nookies";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const loginForm = useForm<LoginUserDto>({
    mode: "onSubmit",
    resolver: yupResolver(loginValidation),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = loginForm;

  const onSubmit = async (dto: LoginUserDto) => {
    console.log(dto);
    try {
      const user = await xhrLoginUser(dto);
      console.log(user);
      setCookie(null, "authToken", user.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } catch (err: any) {
      console.warn(err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <>
      <DialogContentText classes={cn(styles.title)}></DialogContentText>
      <FormProvider {...loginForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" focused></FormField>
          <FormField name="password" label="Пароль"></FormField>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <div className={cn(styles.container)}>
            <button type="submit" className={cn(styles.button)}>
              Войти
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default LoginForm;
