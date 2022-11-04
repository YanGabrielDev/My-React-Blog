import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "./theme";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    box-sizing: border-box;
    padding: 0;

    
    
}

body{
    color: black;
    /* background: black; */
    font-family: ${({theme}: ThemeInterface) => theme.fonts.family?.default};
}



`