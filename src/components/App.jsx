import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { WrapperContent } from './App.styled';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromStorage = localStorage.getItem('contacts');
    if (contactsFromStorage) {
      setContacts(JSON.parse(contactsFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = (data) => {
    const { name, number } = data;
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    if (contacts.find((existingContact) => existingContact.name === contact.name)) {
      Notiflix.Notify.failure(`${contact.name} is already in your contacts`);
    } else {
      setContacts((prevContacts) => [contact, ...prevContacts]);
      Notiflix.Notify.success(`${contact.name} has been successfully added to your phonebook`);
    }
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <WrapperContent>
      <ContactForm createContact={createContact} />
      <Contacts deleteContact={deleteContact} contacts={getFilteredContacts()} />
      <Filter value={filter} onChange={handleFilterChange} />
    </WrapperContent>
  );
};
