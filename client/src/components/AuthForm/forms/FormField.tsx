import React from "react";
import { TextField } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";

type FormFieldI = {
  name: string;
  label: string;
};

const FormField = ({ name, label }: FormFieldI) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      name={name}
      margin="dense"
      label={label}
      fullWidth
      size="small"
      variant="standard"
      error={!!errors?.[name]?.message}
      //   helperText={errors?.[name]?.message}
      //   classes={{ root: styles.field }}
    />
  );
};

export default FormField;
