import styled from '@emotion/styled'
const ContactItems = styled.ul`

  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-left: -30px;
  font-weight: 500;
  font-size: 18px;
  
`
const ContactItem = styled.li`
  gap: 10px;
  padding: 20px;
  `
const ContactButton = styled.button`
  width: 100px;
  font-weight: 500;
  font-size: 14px;

  margin-left: 10px;
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

export { ContactItems, ContactItem, ContactButton } 
