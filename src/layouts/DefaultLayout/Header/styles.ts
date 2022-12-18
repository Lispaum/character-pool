import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;

  background-color: ${(props) => props.theme['cyan-100'] ?? 'cyan'};
  img {
    width: 3.2rem;
    margin-right: 0.5rem;
  }

  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: auto;
      height: 3rem;
      padding: 0 0.4rem;

      color: black;
      text-decoration: none;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      :hover {
        border-bottom: 2px solid blueviolet;
      }

      &.active {
        font-weight: bold;
        border-bottom: 2px solid blueviolet;
        background-color: ${(props) => props.theme['cyan-300'] ?? 'cyan'};
      }
    }
  }

  span {
    font-size: 0.8rem;
    margin: 0 1rem;

    img {
      margin: 0 1rem;
      width: 1.2rem;
    }
  }
`
