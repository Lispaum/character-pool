import styled from 'styled-components'

export const SheetContainer = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`
export const SheetHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.4rem 0;

  div {
    border-bottom: 2px solid blue;

    font-size: 2rem;
    font-weight: bold;
    color: blue;
    text-align: center;
  }
`

export const SkillsTableContainer = styled.div`
  border: 1px solid black;
  margin: 0.25rem;
`

export const TextBoxContainer = styled.div`
  width: 23%;
  margin: 0rem 2rem;

  font-size: 1rem;
  text-align: justify;

  div {
    text-align: end;
  }
`
