import styled from 'styled-components'

export const CharacterNameContainer = styled.div`
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
