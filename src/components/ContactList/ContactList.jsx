import React from 'react';
import PropTypes from 'prop-types';
import { Ul, Li, Name, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(item => {
        return (
          <Li key={item.id}>
            <Name>{item.name}: </Name> <Name>{item.number}</Name>
            <Button type="button" onClick={() => onDelete(item.id)}>
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
