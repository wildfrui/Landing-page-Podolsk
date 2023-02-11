import React from "react";
import cn from "classnames";
import { DialogContentText, TextField } from "@mui/material";
import FormField from "../../FormField";
import styles from "./Forms.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import loginValidation from "utils/schemas/loginValidation";
import { xhrCreatePost } from "api/postsApi";
import { CreatePostI } from "interfaces/CreatePostI";

const LoginForm = () => {
  const loginForm = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(loginValidation),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = loginForm;

  const onSubmit = async (dto: any) => {
    console.log(dto);
    try {
      const posts = await xhrCreatePost(dto);
      console.log(posts);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <DialogContentText classes={cn(styles.title)}></DialogContentText>
      <FormProvider {...loginForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField name="postTitle" label="Почта" focused></FormField>
          <FormField name="postDescription" label="Пароль"></FormField>
          <div className={cn(styles.container)}>
            <button className={cn(styles.button)}>Войти</button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default LoginForm;
