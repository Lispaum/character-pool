import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;

  background-color: ${(props) => props.theme.headerColor};

  @media only screen and (max-width: 600px) {
    max-height: 4rem;
  }

  img {
    height: 2.5rem;
    border-radius: 100%;
    @media only screen and (max-width: 600px) {
      height: 4rem;
    }
  }

  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: auto;
      padding: 0rem 0.5rem;

      color: black;
      text-decoration: none;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      :hover {
        border-bottom: 2px solid blueviolet;
      }

      &.active {
        font-weight: bold;
        border-radius: 10px;
        margin: 0 4px;
        border-bottom: 2px solid blueviolet;
        background-color: ${(props) => props.theme['fill-B'] ?? ''};
      }
    }
  }

  div {
    font-size: 0.8rem;

    button {
      background-color: ${(props) => props.theme['fill-A']};
      border: none;
      border-radius: 50px;
      padding: 2rem 2rem 0 0;
      width: 0;
      height: 0;
    }

    span {
      font-size: 0.8em;
    }

    img {
      height: 2rem;
    }

    :last-of-type {
      display: flex;
      flex-direction: row;
    }

    @media only screen and (max-width: 600px) {
      :last-of-type {
        min-width: 8rem;
        flex-direction: column;
      }

      .buttons {
        display: flex;
        flex-direction: row;
      }
    }
  }
`
