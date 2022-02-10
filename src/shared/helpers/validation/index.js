import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Too Short, min 6 Char')
    .required('Name Is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .required('Password is Required')
    .min(6, 'Too Short, min 6 Char'),
  passwordConfirm: Yup.string()
    .required('Password Confirm is Required')
    .min(6, 'Too Short, min 6 Char'),
  nip: Yup.string().required('Phone is Required'),
});
