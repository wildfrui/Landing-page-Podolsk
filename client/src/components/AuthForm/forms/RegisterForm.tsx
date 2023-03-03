import React, { useState } from "react";
import cn from "classnames";
import { Alert, DialogContentText } from "@mui/material";
import { setCookie } from "nookies";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerValidation from "utils/schemas/registerValidation";
import styles from "./Forms.module.css";
import FormField from "components/FormField";
import { xhrRegisterUser } from "api/userApi";
import { CreateUserDto } from "interfaces/CreateUserDto";
import { setUserInfo } from "actions/authActions";
import { useLocalStorage } from "hooks";
import { UserResponse } from "types/UserResponse";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const { setStorageValue } = useLocalStorage<UserResponse | null>(
    "userInfo",
    null
  );
  const [errorMessage, setErrorMessage] = useState("");
  const registerForm = useForm<CreateUserDto>({
    mode: "onSubmit",
    resolver: yupResolver(registerValidation),
  });
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors },
  } = registerForm;

  const onSubmit = async (dto: CreateUserDto) => {
    console.log(dto);
    try {
      const user = await xhrRegisterUser(dto);
      setStorageValue(user);
      dispatch(setUserInfo(user));
      setErrorMessage("");
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
      <FormProvider {...registerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField name="name" label="Имя" focused></FormField>
          <FormField name="email" label="Почта"></FormField>
          <FormField name="password" label="Пароль"></FormField>
          {errorMessage && (
            <Alert sx={{ marginTop: "10px" }} severity="error">
              {errorMessage}
            </Alert>
          )}
          <div className={cn(styles.container)}>
            <button type="submit" className={cn(styles.button)}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
