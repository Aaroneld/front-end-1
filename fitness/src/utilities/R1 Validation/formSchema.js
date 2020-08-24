import * as yup from 'yup'

const formSchema = yup.object().shape({
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
      .oneOf(['Member', 'Couch'], 'You must select a role')
      .required('You must select a role'),
  });

  export default formSchema