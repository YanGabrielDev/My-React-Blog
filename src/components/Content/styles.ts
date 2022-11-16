import styled, {css} from "styled-components";
import {ThemeInterface} from '../../styles/theme'

export const Container = styled.div`
${({theme}: ThemeInterface) => css`
width: 100%;
max-width: 760px;
padding: 0 1rem;
margin:0 auto;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
padding-top: 6rem;
padding-bottom: 6rem;

font-family: ${theme.fonts?.family?.default};
`}


`