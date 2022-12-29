import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  width: 23%;
  margin: 0rem 2rem;

  font-size: 1rem;
  height: 50vh;

  textarea {
    height: 50vh;
    background-color: transparent;
    text-align: justify;
    font-size: inherit;
    font-family: inherit;
    width: 100%;
    border: none;
  }

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
