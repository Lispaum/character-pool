import styled from 'styled-components'

export const SheetContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const SheetHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.4rem 0;

  input {
    border: none;
    border-bottom: 2px solid darkblue;

    width: auto;
    background-color: transparent;
    font-size: 2rem;
    font-weight: bold;
    color: darkblue;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    input {
      width: 100%;
      margin: 1rem;
    }
  }
`

export const SheetBodyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 100%;
    padding: 1rem;
  }

  @media only screen and (max-width: 600px) {
  }
`

// export const SkillsTableContainer = styled.div`
//   border: 1px solid black;
//   margin: 0.25rem;
// `

export const TextBoxContainer = styled.div`
  width: 23%;
  margin: 0rem 2rem;

  font-size: 1rem;
  text-align: justify;

  div {
    text-align: end;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid white;
    margin-top: 1rem;
  }
`
