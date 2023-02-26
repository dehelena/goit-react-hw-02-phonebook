import React from 'react';
import { ContactStyled } from './ContactsStyled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactStyled>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className="contactItem">
            <span>{contact.name} </span>
            <span> {contact.number} </span>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactStyled>
  );
};


// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
    
//   ).isRequired,
// }