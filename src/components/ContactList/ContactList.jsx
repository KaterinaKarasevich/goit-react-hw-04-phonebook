import PropTypes from 'prop-types'; 
import React from "react";
import {ContactItems, ContactItem, ContactButton} from "./ContactList.styled"

export const ContactList =({contacts, onDeleteContact}) => {
        return (
          <ContactItems>
            {contacts.map(contact => {
                return (
                  <ContactItem key={contact.id}>
                    {contact.name + ": " + contact.number}
                    {<ContactButton
                      type="button"
                      onClick={() => onDeleteContact(contact.id)}>
                      Delete
                    </ContactButton>}
                  </ContactItem>
               )
            })}
           
          </ContactItems>
        )
    }
   

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }))
}
   