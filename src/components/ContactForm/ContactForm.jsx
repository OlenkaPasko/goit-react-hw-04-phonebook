import React from 'react';
import PropTypes from 'prop-types';
import { Label, Form, Button, FieldFormik } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';

export const ContactForm = ({ onSubmitForm }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    //console.log(value);
    onSubmitForm(value);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <Label>
          Name:
          <FieldFormik
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </Label>
        <Label>
          Number:
          <FieldFormik
            type="tel"
            name="number"
            pattern="\+?\d{(1, 4)}?[-.\s]?\(?\d{(1, 3)}
            ?\)?[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 9)}"
            title="Phone number must be digits and can contain spaces, dashes,
            parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propType = {
  onSubmitForm: PropTypes.func.isRequired,
};
