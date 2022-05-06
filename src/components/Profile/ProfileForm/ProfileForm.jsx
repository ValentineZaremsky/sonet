import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import TextError from '../../common/TextError/TextError'
import dcss from '../ProfileData/ProfileData.module.css';
import css from './ProfileForm.module.css';

const ProfileForm = ({ profile, saveProfile, disableEdit }) => {

  const initialValues = {
    fullName:  profile.fullName || '',
    aboutMe:   profile.aboutMe  || '',
    lookingForAJob: profile.lookingForAJob || false,
    jobDescription: profile.lookingForAJobDescription || '',
    facebook:  profile.contacts.facebook  || '',
    github:    profile.contacts.github    || '',
    instagram: profile.contacts.instagram || '',
    mainLink:  profile.contacts.mainLink  || '',
    twitter:   profile.contacts.twitter   || '',
    vk:        profile.contacts.vk        || '',
    website:   profile.contacts.website   || '',
    youtube:   profile.contacts.youtube   || '',
  }

  const validationSchema = Yup.object({
    fullName:       Yup.string().required('Required'),
    aboutMe:        Yup.string().required('Required'),
    jobDescription: Yup.string().required('Required'),
    facebook:       Yup.string().url('Invalid URL format'),
    github:         Yup.string().url('Invalid URL format'),
    instagram:      Yup.string().url('Invalid URL format'),
    mainLink:       Yup.string().url('Invalid URL format'),
    twitter:        Yup.string().url('Invalid URL format'),
    vk:             Yup.string().url('Invalid URL format'),
    website:        Yup.string().url('Invalid URL format'),
    youtube:        Yup.string().url('Invalid URL format')
  })

  const onSubmit = (values, submitProps) => {
    let profileData = {
      userId:      profile.userId,
      fullName:    values.fullName,
      aboutMe:     values.aboutMe,
      lookingForAJob: values.lookingForAJob,
      lookingForAJobDescription: values.jobDescription,
      contacts: {
        facebook:  values.facebook,
        github:    values.github,
        instagram: values.instagram,
        mainLink:  values.mainLink,
        twitter:   values.twitter,
        vk:        values.vk,
        website:   values.website,
        youtube:   values.youtube,
      }
    };
    saveProfile(profileData, submitProps.setStatus)
    .then(() => {
      disableEdit();
    })
    .catch(() => {})
    submitProps.setSubmitting(false);
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
            <div className={dcss.infoHeader}>
              <div className={dcss.name}>Edit profile</div>
              <div className={dcss.control}>
                <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
                  Save profile
                </button>
              </div>
            </div>

            { apiErrors ? <div>{apiErrors}</div> : null }

            <div className={dcss.infoBlock}>
              <div className={dcss.statusBlock}>
                <div className={css.control} >
                  <label htmlFor='fullName'>Full Name</label>
                  <Field type='text' id='fullName' name='fullName' placeholder="Enter your full name" />
                  <ErrorMessage name='fullName' component={TextError} />
                </div>

                <div className={css.control}>
                  <label htmlFor='aboutMe'>About Me</label>
                  <Field as='textarea' id='aboutMe' name='aboutMe' placeholder="Enter something about you" />
                  <ErrorMessage name='aboutMe' component={TextError} />
                </div>

                <div className={`${css.control} ${css.checkbox}`} >
                  <Field type='checkbox' id='lookingForAJob' name='lookingForAJob' />
                  <label htmlFor='lookingForAJob'>I am looking for a job</label>
                </div>

                <div className={css.control}>
                  <label htmlFor='jobDescription'>Job Description</label>
                  <Field as='textarea' id='jobDescription' name='jobDescription' placeholder="Describe preferred job" />
                  <ErrorMessage name='jobDescription' component={TextError} />
                </div>
              </div>
              <div className={dcss.contactsBlock}>
                { Object.keys(profile.contacts).map(key =>
                  <div key={key} className={css.control} >
                    <label htmlFor={key}>{key}</label>
                    <Field type='text' id={key} name={key} placeholder={key} />
                    <ErrorMessage name={key} component={TextError} />
                  </div>
                ) }
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default ProfileForm;
