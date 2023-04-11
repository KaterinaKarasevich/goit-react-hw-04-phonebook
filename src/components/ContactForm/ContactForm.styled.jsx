import styled from '@emotion/styled'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid black;
  padding: 30px;
  margin: 20px;

`
const FormGroup = styled.div`
   margin-bottom: 30px;
`

const FormWrap = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  &:last-child {
  margin-bottom: 0;
}
`

const FormLabel = styled.span`
  text-align: left;
  margin-bottom: 4px;
  font-size: 18px;
  line-height: calc(14 / 12);
  letter-spacing: 0.01em;
`

const FormInput = styled.input`

  border: 1px solid grey;
  border-radius: 4px;
  padding: 5px;
  padding-left: 15px;
  outline: transparent;

  font-size: 16px;
  line-height: calc(20 / 16);
  color: black;
  transition: border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus,
    &:hover {
    border-color: blue;
   }
`

const Button = styled.button`
  width: 150px;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(30 / 16);

  padding: 5px;
  letter-spacing: 0.06em;
  color: white;
  background-color: gray;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  &:hover,
  &:focus {
  background-color: blue;
  }
`

export { Form, FormGroup, FormWrap, FormLabel, FormInput, Button}