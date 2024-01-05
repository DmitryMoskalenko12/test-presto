import * as Yup from 'yup';

export const validationOrderForm = Yup.object().shape({
  name: Yup.string().min(2, 'Мінімум 2 символи').required('Обов\'язкове поле'),
  email: Yup.string()
  .email('Неправильный емейл адрес')
  .required('Обов\'язкове поле!'),
  phone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Обов\'язкове поле'),
})