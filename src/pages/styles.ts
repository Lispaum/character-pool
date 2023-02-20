import styled from 'styled-components'

export const PageContainer = styled.div`
  margin: 1rem 2rem;
  p {
    margin: 1rem 0;
  }

  select,
  button {
    padding: 0.4rem;
    border: none;
    border-radius: 25px;

    background-color: ${(props) => props.theme['fill-B'] ?? ''};
    margin: 1rem 0.2rem;
  }

  div#lifePath {
  }
`
