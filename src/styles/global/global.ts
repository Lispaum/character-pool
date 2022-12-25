import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '../themes/default'

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: inherit;

}

body{
    /* background-color: whitesmoke;//ivory, lightgrey */
    background-color: ${(props) => props.theme.backgroundColor ?? 'blue'};

    color: ${(props) => props.theme.textColor ?? 'white'};
}

:focus{
    outline: transparent;
    box-shadow: 0 0 0 2px transparent;
}

`
