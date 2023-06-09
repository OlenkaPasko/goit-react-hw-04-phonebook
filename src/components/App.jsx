import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  //const [name, setName] = useState('');
  //const [number, setNumber] = useState('');

  // для оновлення localStorage коли state contacts оновився
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = values => {
    const checkContact = contacts.some(
      ({ name, number }) =>
        name.toLowerCase().trim() === values.name.toLowerCase().trim() ||
        number.trim() === values.number.trim()
    );
    if (checkContact) alert(`${values.name} is already in contacts!`);
    setContacts(contacts => [{ ...values, id: nanoid() }, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.target.value.toLowerCase().trim());
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
    return filterContacts;
  };
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={addContact} id={nanoid()} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
    </Container>
  );
}
