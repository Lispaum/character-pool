import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;

  margin: 0rem 2rem;

  font-size: 1rem;

  #backgroundPopup {
    visibility: hidden;
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 150%;

    margin-top: 1em;
    &::after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-right: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }

    &.show {
      visibility: visible;
      -webkit-animation: fadeIn 1s;
      animation: fadeIn 1s;

      padding: 2em;
      border-radius: 6px;
      text-align: justify;
      background-color: ${(props) => props.theme['fill-B'] ?? ''};
    }

    @-webkit-keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

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
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid white;
    margin-top: 1rem;
  }
`
