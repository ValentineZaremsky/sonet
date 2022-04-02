import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import TextError from '../common/TextError/TextError'
import css from './Login.module.css';

const initialValues = {
  email: '',
  pass: '',
  remember: false
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  pass: Yup.string().required('Required')
})

const onSubmit = (values, submitProps) => {
  console.log('Login data', values)
  submitProps.setSubmitting(false)
  submitProps.resetForm()
}

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {formik => {
        return (
          <Form className={css.form}>
            <div className={css.control} >
              <label htmlFor='email'>Login</label>
              <Field type='email' id='email' name='email' placeholder="E-mail" />
              <ErrorMessage name='email' component={TextError} />
            </div>

            <div className={css.control} >
              <label htmlFor='pass'>Password</label>
              <Field type='password' id='pass' name='pass' placeholder="Password" />
              <ErrorMessage name='pass' component={TextError} />
            </div>

            <div className={`${css.control} ${css.checkbox}`} >
              <Field type='checkbox' id='remember' name='remember' />
              <label htmlFor='remember'>Remember me</label>
            </div>

            <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
              Login
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

const Login = (props) => {
  return (
    <div className={css.login}>
      <h1>Log in</h1>
      <LoginForm />
    </div>
  )
}

export default Login;
