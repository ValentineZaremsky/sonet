import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import css from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <Dialog id={d.id} key={d.id}  name={d.name} avatar={d.avatar} />);
  let messagesElements = state.messages.map( m => <Message id={m.id} key={m.id} message={m.text} align={m.align} /> );

  return (
    <div className={css.dialogsBlock}>
      <div className={css.dialogs}>
        { dialogsElements }
      </div>
      <div>
        <div className={css.messages}>
          { messagesElements }
        </div>
        <AddMessageForm addNewMessage={props.addNewMessage} />
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  const initialValues = {
    message: ''
  }
  const validationSchema = Yup.object({
    message: Yup.string().required('Required')
  })
  const onSubmit = (values, submitProps) => {
    props.addNewMessage(values.message);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {formik => {
        return (
          <Form className={css.form}>
            <div className={css.newMessage}>
              <Field as='textarea' id='message' name='message' placeholder="Enter your message" />
              <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
                Send
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Dialogs;
