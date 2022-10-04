import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formHandlerSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const addContacts = {
      id: nanoid(5),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [addContacts, ...contacts],
    }));
  };
  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    const { filter } = this.state;
    const normalized = this.state.filter.toLocaleLowerCase();
    const renderContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formHandlerSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilterContacts={this.filterContacts} />
        <ContactList contacts={renderContacts} />
      </>
    );
  }
}
