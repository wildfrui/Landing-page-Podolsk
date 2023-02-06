import React, { useCallback } from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface FormFieldI {
  name: string;
  label: string;
  focused?: boolean;
}

type FormField = {
  [name: string]: string;
};

const FormField = ({ name, label, focused }: FormFieldI) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormField>();

  const setFocus = useCallback((element: any) => {
    if (focused) {
      element?.focus();
    }
  }, []);

  return (
    <TextField
      margin="dense"
      label={label}
      fullWidth
      size="small"
      variant="standard"
      error={!!errors?.[name]?.message}
      helperText={errors?.[name]?.message}
      inputRef={setFocus}
      {...register(name)}
      //   classes={{ root: styles.field }}
    />
  );
};

export default FormField;
