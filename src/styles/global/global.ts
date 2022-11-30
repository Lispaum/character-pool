import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body{
    /* background-color: ${(props) => props.theme['cyan-100']}; */
    /* color: #fff; */
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ;
}

`
