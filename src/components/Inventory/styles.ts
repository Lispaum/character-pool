import styled from 'styled-components'

export const BoxContainer = styled.div`
  border: 1px solid black;
  margin: 0.25rem;

  h1 {
    font-size: 1.4rem;
    text-align: center;
    background-color: ${(props) => props.theme['fill-B'] ?? ''};
    padding: 0 0.5rem;
  }
`

export const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Georgia, 'Times New Roman', Times, serif;

  color: ${(props) => props.theme.textColor ?? 'white'};
  background-color: ${(props) => props.theme['fill-A'] ?? ''};

  :nth-child(odd) {
    background-color: ${(props) => props.theme['fill-B'] ?? ''};
  }

  div {
    width: 100%;
    margin: 0.2rem 0.5rem;
    background-color: transparent;
    border: none;

    font-size: inherit;
    font-family: inherit;
    text-align: left;
  }

  div {
    margin: 0.2rem 0.2rem;
  }
`
