import { nanoid } from "nanoid";
import React, {useEffect, useState} from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList"
import { Filter} from "./Filter/Filter"
import {Title, TitleContacts} from "./App.styled"

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filterData, setFilterData] = useState("");


  useEffect(() => {
    const contactsLocalStorage = localStorage.getItem("contact")
      if (contactsLocalStorage) {
    setContacts(JSON.parse(contactsLocalStorage))} }, [])

  useEffect(() => {
    contacts.length &&
      localStorage.setItem("contact", JSON.stringify(contacts))
  }, [contacts])
  
  const getExistingName = (name) => {
    return contacts.find(contact => contact.name === name)
  };

  
  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const existingName = getExistingName(name);
   
    if (existingName) {
      return alert(`${name} is already in contacts`)
    } 

      setContacts((prev) => [...prev, contact])
    }
  

  const changeInputFilter =(evt) => {
    setFilterData(evt.currentTarget.value)
  };

  const getFilteredContacts = () => {
 
    return contacts.filter(contacts => contacts.name.toLowerCase().includes(filterData.toLowerCase()))
  };

 const deleteContact = (userId) => {
    setContacts((prev) => 
    prev.filter(({ id }) => id !== userId))
  };
  

    return (
      <div>
        <Title>Phonebook</Title>
           <ContactForm addContact={addContact} />

        <TitleContacts>Contacts</TitleContacts>
           <Filter data={filterData} onChangeInputFilter={changeInputFilter}/>
           <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
      </div>
    );
    }
