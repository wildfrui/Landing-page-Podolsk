import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface FormFieldI {
  name: string;
  label: string;
}

type FormField = {
  [name: string]: string;
};

const FormField = ({ name, label }: FormFieldI) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormField>();

  return (
    <TextField
      margin="dense"
      label={label}
      fullWidth
      size="small"
      variant="standard"
      error={!!errors?.[name]?.message}
      helperText={errors?.[name]?.message}
      {...register(name)}
      //   classes={{ root: styles.field }}
    />
  );
};

export default FormField;
