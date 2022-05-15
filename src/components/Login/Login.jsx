import React from 'react';
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import TextError from '../common/TextError/TextError'
import css from './Login.module.css';


const LoginForm = ({ login, captchaUrl }) => {
  const initialValues = {
    email: '',
    pass: '',
    remember: false,
    captcha: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    pass: Yup.string().required('Required')
  })

  const onSubmit = (values, submitProps) => {
    let loginData = {
      email:      values.email,
      password:   values.pass,
      rememberMe: values.remember,
      captcha:    values.captcha
    };
    login(loginData, submitProps.setStatus);
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

            { apiErrors && <div>{apiErrors}</div> }

            { captchaUrl &&
              <>
                <img src={captchaUrl} className={css.captcha} alt="Captcha"/>
                <div className={css.control}>
                  <label htmlFor='captcha'>Captcha</label>
                  <Field type='text' id='captcha' name='captcha' placeholder="Captcha" />
                  <ErrorMessage name='captcha' component={TextError} />
                </div>
              </>
            }

            <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
              Login
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

const Login = ({ isAuth, login, captchaUrl}) => {
  if (isAuth)
    return <Navigate to='/' />
  else
    return (
      <div className={css.login}>
        <h1>Log in</h1>
        <LoginForm login={login} captchaUrl={captchaUrl}/>
      </div>
    )
}

const mapStateToProps = (state) => ({
  isAuth:     state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);
