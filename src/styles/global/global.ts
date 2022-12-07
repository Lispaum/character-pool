import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body{
    background-color: whitesmoke;//ivory, lightgrey
    /* color: #fff; */
}

:focus{
    outline: transparent;
    box-shadow: 0 0 0 2px transparent;
}

`
