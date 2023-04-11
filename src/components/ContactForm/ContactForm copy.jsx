import PropTypes from 'prop-types'; 
import { Component } from "react";
import { Form, FormGroup, FormWrap, FormLabel, FormInput, Button} from "./ContactForm.styled"
export class ContactForm extends Component {
  
    state = {
      name: "",
      number: "",
  }
  
  handleChange =({ target: {name, value}}) => {
    this.setState({
       [name]: value,
     })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact({
      name: this.state.name,
      number: this.state.number,
    })
    this.setState({
      name: "",
      number: "",
    })

  }
    render() {
        return (
            
        <Form onSubmit={this.handleSubmit}>
        
          <FormGroup>
            <FormWrap>
              <FormLabel>Name</FormLabel>

                  <FormInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    value={this.state.name}
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
                    onChange={this.handleChange}
                    value={this.state.number}
                 />
              
            </FormWrap>
          </FormGroup>
          <Button type="submit">Add contact</Button>
        </Form>
 
        )
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,   
}
