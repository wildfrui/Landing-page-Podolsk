import * as yup from "yup";

const loginValidation = yup
  .object()
  .shape({
    email: yup.string().email("Неправильный формат").required("Введите почту"),
    password: yup
      .string()
      .min(7, "Длина пароля должна быть минимум 6 символов")
      .required("Введите пароль"),
  })
  .required();

export default loginValidation;
