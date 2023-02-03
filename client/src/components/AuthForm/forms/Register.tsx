import React from "react";
import cn from "classnames";
import { DialogContentText, TextField } from "@mui/material";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerValidation from "utils/schemas/registerValidation";
import styles from "./Forms.module.css";
import FormField from "./FormField";

interface RegisterFormI {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const registerForm = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registerValidation),
  });

  const onSubmit = (data: any) => alert("Ok");

  return (
    <>
      <DialogContentText classes={cn(styles.title)}></DialogContentText>
      <FormProvider {...registerForm}>
        <form onSubmit={registerForm.handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта"></FormField>
          <FormField name="password" label="Пароль"></FormField>
          {/* <TextField
            margin="dense"
            id="name"
            label="Имя"
            type="name"
            fullWidth
            size="small"
            variant="standard"
            error={!!errors.name?.message}
            helperText={errors?.name?.message}
            classes={{ root: styles.field }}
            {...register("email")}
          /> */}
          {/* <TextField
            margin="dense"
            id="email"
            label="Почта"
            type="email"
            fullWidth
            size="small"
            variant="standard"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            classes={{ root: styles.field }}
            {...register("email")}
          />

          <TextField
            margin="none"
            id="password"
            label="Пароль"
            type="password"
            fullWidth
            size="small"
            variant="standard"
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            classes={{ root: styles.field }}
            {...register("password")}
          /> */}
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
      </FormProvider>
    </>
  );
};

export default Register;
