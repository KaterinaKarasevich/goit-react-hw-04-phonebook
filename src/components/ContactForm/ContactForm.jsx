import PropTypes from 'prop-types'; 
import React, {useState } from "react";
import { Form, FormGroup, FormWrap, FormLabel, FormInput, Button} from "./ContactForm.styled"

export const ContactForm = ({ addContact }) => {

  const[name, setName] = useState("");
  const [number, setNumber] = useState("")
  
  const handleChange =({ target: {name, value}}) => {
    if (name === "name") setName(value)
    else if (name === "number") setNumber(value)
  }
 const handleSubmit = (e) => {
    e.preventDefault()
    addContact({
      name,
      number,
    })
   setName("")
   setNumber("")
  }
    
  return (
            
        <Form onSubmit={handleSubmit}>
        
          <FormGroup>
            <FormWrap>
              <FormLabel>Name</FormLabel>

                  <FormInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                    value={name}
                    />
                
            </FormWrap>
            
            <FormWrap>
              <FormLabel>Number</FormLabel>
                <FormInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                    value={number}
                 />
              
            </FormWrap>
          </FormGroup>
          <Button type="submit">Add contact</Button>
        </Form>
 
        )
    
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,   
}
