import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({posts, addNewPost, isOwner}) => {
  let postsElements = posts.map( p => <Post key={p.id} message={p.text} likes={p.likes} /> );

  return (
    <div className={css.postsBlock}>
      <h3>Posts</h3>
      { isOwner && <AddPostForm addNewPost={addNewPost} /> }
      <div className={css.posts}>
        { postsElements }
      </div>
    </div>
  )
}

const AddPostForm = (props) => {
  const initialValues = {
    post: ''
  }
  const validationSchema = Yup.object({
    post: Yup.string().required('Required')
  })
  const onSubmit = (values, submitProps) => {
    props.addNewPost(values.post);
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
            <div className={css.newPost}>
              <Field as='textarea' id='post' name='post' placeholder="Enter your post" />
              <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
                Add post
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default MyPosts;
