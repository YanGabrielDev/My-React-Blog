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
${({theme}:ThemeInterface) =>css`
font-size: ${theme.fonts?.sizes?.small};
color: white;
align-items: center;
text-align: center;

`}
`
export const contentHeader =  styled.div`
${({theme}:ThemeInterface) =>css`
width: 100%;
max-width: 1050px;
padding: 0 1rem;
display: flex;
justify-content: space-between;
margin: 0 auto;
height: 50px;
align-items: center;

`}
`
export const LogoTextandImage =  styled.div`
${({theme}:ThemeInterface) =>css`
height: 50px;
width: auto;
max-width: 200px;
align-items: center;
display: flex;

`}
`