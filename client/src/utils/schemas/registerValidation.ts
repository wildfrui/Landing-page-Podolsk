import * as yup from "yup";

const registerValidation = yup
  .object()
  .shape({
    name: yup.string().required("Имя и фамилия обязательны"),
    email: yup.string().email("Неверная почта").required("Почта обязательна"),
    password: yup
      .string()
      .min(7, "Длина пароля должна быть минимум 6 символов")
      .required("Введите пароль"),
  })
  .required();

export default registerValidation;
