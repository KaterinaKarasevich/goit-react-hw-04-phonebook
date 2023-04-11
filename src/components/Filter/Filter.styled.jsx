import styled from '@emotion/styled'

const TitleFilter = styled.h4`
    margin-left: 25px;
`

const FilterInput = styled.input`

  border: 1px solid grey;
  border-radius: 4px;
  padding: 5px;
  padding-left: 15px;
  outline: transparent;
  margin-left: 25px;
  font-size: 16px;
  line-height: calc(20 / 16);
  color: black;
  transition: border-color 1000ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus,
    &:hover {
    border-color: blue;
   }
`
export {FilterInput, TitleFilter}