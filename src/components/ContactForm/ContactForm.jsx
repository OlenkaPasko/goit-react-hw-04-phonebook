import { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Form, Button, Input } from './ContactForm.styled';

export const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    };
    onSubmitForm(newContact);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeInput}
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{(1, 4)}?[-.\s]?\(?\d{(1, 3)}
            ?\)?[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 9)}"
          title="Phone number must be digits and can contain spaces, dashes,
            parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeInput}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
ContactForm.propTypes = { onSubmitForm: PropTypes.func.isRequired };
