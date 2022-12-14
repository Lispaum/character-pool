import styled from 'styled-components'

export const BoxContainer = styled.div`
  border: 1px solid black;
  margin: 0.25rem;
  width: 9rem;

  h1 {
    font-size: 1.2rem;
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

  div,
  input {
    width: 100%;
    margin: 0.2rem 0.5rem;
    background-color: transparent;
    border: none;

    font-size: inherit;
    font-family: inherit;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :hover div {
    white-space: unset;
  }

  span {
    visibility: hidden;
    margin: 0.2rem 0.5rem;
    font-weight: bold;
    font-family: monospace;
  }

  :hover span {
    visibility: visible;
  }

  div {
    margin: 0.2rem 0.2rem;
  }
`
