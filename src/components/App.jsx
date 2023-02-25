import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { createContext } from 'react';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import FormAddContact from './FormAddContact/FormAddContact';
import { Notify } from 'notiflix';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione', number: '443-89-12' },
      { id: 'id-3', name: 'Eden', number: '645-17-79' },
      { id: 'id-4', name: 'Annie', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = contact => {
    // console.log(contact);
    if (this.state.contacts.some(el => el.name === contact.name)) {
      Notify.warning(
        `${contact.name} is already in contact list. Please add another one`
      );
      return;
    }

    if (this.state.contacts.some(el => el.number === contact.number)) {
      Notify.warning(
        `${contact.number} is already in contact list. Please add another one`
      );
      return;
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
    // contact: [newContact, ...this.state.contacts]
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== contactId)
    })
  };

  render() {
    // const filteredContacts = this.getFilteredContact();
    return (
      <div>
        <h2>Phonebook</h2>
        <FormAddContact onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} getFilteredFriend={this.changeFilter} />
        <ContactList
          contacts={this.getFilteredContact()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
