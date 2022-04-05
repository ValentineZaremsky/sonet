import React from 'react';
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import TextError from '../common/TextError/TextError'
import css from './Login.module.css';


const LoginForm = (props) => {
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
    let loginData = {
      email: values.email,
      password: values.pass,
      rememberMe: values.remember
    };
    props.login(loginData, submitProps.setStatus);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {formik => {
        let apiErrors;
        if (formik.status) {
          apiErrors = formik.status.error.map((item, index) => <TextError key={index}>{item}</TextError>);
        }

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

            {apiErrors ? <div>{apiErrors}</div> : null}

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
  if (props.isAuth)
    return <Navigate to='/profile' />
  else
    return (
      <div className={css.login}>
        <h1>Log in</h1>
        <LoginForm login={props.login}/>
      </div>
    )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
