import React, { ReactChild, ReactElement, ReactNode } from "react";
import { DialogContentText } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import cn from "classnames";
import loginValidation from "utils/schemas/loginValidation";
import FormField from "components/FormField";
import styles from "./Forms.module.css";
import { AnyObjectSchema } from "yup";

type FormWrapperI = {
  children: ReactNode | ReactElement;
  schema: AnyObjectSchema;
};

const FormWrapper = ({ children, schema }: FormWrapperI) => {
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <>
        <DialogContentText classes={cn(styles.title)}></DialogContentText>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {children}
            {/* <div className={cn(styles.container)}>
              <button className={cn(styles.button)}>Войти</button>
            </div> */}
          </form>
        </FormProvider>
      </>
    </div>
  );
};

export default FormWrapper;
