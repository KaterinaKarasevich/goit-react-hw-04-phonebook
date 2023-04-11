import { nanoid } from "nanoid";
import React, {Component} from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList"
import { Filter} from "./Filter/Filter"
import {Title, TitleContacts} from "./App.styled"

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filterData: '',
    //name: '',
    //number: ''
  }
  componentDidMount() {
    console.log("componentDidMount");
    const contactsLocalStorage = localStorage.getItem("contact");
    const parsedContactsLocalStorage = JSON.parse(contactsLocalStorage)
    if (parsedContactsLocalStorage) {
    this.setState({contacts: parsedContactsLocalStorage})}
    
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("Обновилось поле contacts")
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem("contact", JSON.stringify(this.state.contacts))
  }
  addContact = (data) => {
    const existingName = this.state.contacts
      .map((contact) => contact.name)
      .includes(data.name)
    if (existingName) {
      alert(`${data.name} is already in contacts`)
    } else {
      const newUser = {
        ...data,
        id: nanoid(),
      }
      //console.log(newUser)
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newUser]
      }))
    }
  };

  changeInputFilter =(evt) => {
    this.setState({filterData: evt.currentTarget.value})
  };

  getFilteredContacts = () => {
    const { contacts, filterData } = this.state;
    return contacts.filter(contacts => contacts.name.toLowerCase().includes(filterData.toLowerCase()))
  };

  deleteContact = (userId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== userId),
      }
    })
  };
  
  render() {
    console.log("render")
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <Title>Phonebook</Title>
           <ContactForm addContact={this.addContact} />

        <TitleContacts>Contacts</TitleContacts>
           <Filter data={this.state.filterData} onChangeInputFilter={this.changeInputFilter}/>
           <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  };
 
}
