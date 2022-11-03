import styled, {css} from "styled-components";
import {ThemeInterface} from '../../styles/theme'

export const Container =  styled.header`
${({theme}:ThemeInterface) =>css`
width: 100%;
height: 50px;
background-color: ${theme?.colors?.black};
position: fixed;
`}
`
export const LogoText =  styled.h2`
${({theme, font}:ThemeInterface) =>css`
font-size: ${font?.sizes?.medium};
color: white;

`}
`