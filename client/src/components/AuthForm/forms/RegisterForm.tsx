import React from "react";
import cn from "classnames";
import { DialogContentText, TextField } from "@mui/material";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerValidation from "utils/schemas/registerValidation";
import styles from "./Forms.module.css";
import FormField from "components/FormField";

const RegisterForm = () => {
  const registerForm = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registerValidation),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = registerForm;

  console.log(errors);

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <DialogContentText classes={cn(styles.title)}></DialogContentText>
      <FormProvider {...registerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField name="name" label="Имя"></FormField>
          <FormField name="email" label="Почта"></FormField>
          <FormField name="password" label="Пароль"></FormField>
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
