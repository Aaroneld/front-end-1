import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(4, "Name must be at least 4 characters long.")
      .required("Name is Required"),
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters long.")
      .required("Username is Required"),
    email: yup
      .string()
      .email('Must be a valid email address')
      .required('Must include email address'),
    role: yup
      .string()
      .oneOf(['user', 'instrutor'], 'You must select a role')
      .required('You must select a role'),
    password: yup
    .string()
    .min(8, "password must be at least 8 characters long.")
    .required("password is Required"),
  });

  export default formSchema