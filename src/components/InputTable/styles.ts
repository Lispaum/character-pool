import styled from 'styled-components'

export const TableContainer = styled.div`
  border: 1px solid black;
  margin: 0.25rem;

  h1 {
    font-size: 1.4rem;
    text-align: center;
    background-color: ${(props) => props.theme['cyan-300'] ?? 'cyan'};
  }
`

export const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Georgia, 'Times New Roman', Times, serif;

  color: ${(props) => props.theme['white-100'] ?? 'black'};
  background-color: ${(props) => props.theme['cyan-100'] ?? 'cyan'};

  :nth-child(odd) {
    background-color: ${(props) => props.theme['cyan-300'] ?? 'cyan'};
  }

  label {
    margin: 0.2rem 0.5rem;
  }
  input {
    width: 2rem;
    border: none;
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
  }
`
