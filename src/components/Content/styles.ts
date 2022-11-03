import styled, {css} from "styled-components";
import {ThemeInterface} from '../../styles/theme'

export const Container = styled.div`
${({theme, font}: ThemeInterface) => css`
width: 100%;
max-width: 760px;
background-color: red;
margin:0 auto;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
padding-top: 6rem;
font-family: ${font?.family?.default};
`}


`