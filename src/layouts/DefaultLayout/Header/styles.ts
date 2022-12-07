import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;

  background-color: ${(props) => props.theme['cyan-100'] ?? 'cyan'};
  img {
    width: 3.2rem;
    margin-right: 0.5rem;
  }

  nav {
    display: flex;

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
`
