import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import CSS from './ContactForm.module.css';

export function ContactForm({ addContactCard }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const nameID = useId();
  const numberID = useId();

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required name'),
    number: Yup.number().integer().required('Required number'),
  });

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    return addContactCard({
      ...values,
      id: nanoid(),
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={CSS.form}>
        <label htmlFor={nameID}>Name</label>
        <Field className={CSS.input} type="text" name="name" id={nameID} />
        <ErrorMessage className={CSS.errorName} name="name" component="span" />
        <label htmlFor={numberID}>Number</label>
        <Field
          className={CSS.inputSecond}
          type="text"
          name="number"
          id={numberID}
        />
        <ErrorMessage
          className={CSS.errorNumber}
          name="number"
          component="span"
        />
        <button className={CSS.btn} type="submit">
          Add contact 📌
        </button>
      </Form>
    </Formik>
  );
}
