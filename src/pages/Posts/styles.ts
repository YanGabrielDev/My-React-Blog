import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import {ThemeInterface} from '../../styles/theme'

export const TitleLink = styled(Link)`
${({theme}: ThemeInterface) => css`
font-size: ${theme.fonts.sizes?.medium};
`}
`
export const Title = styled.h1`
${({theme}: ThemeInterface) => css`
font-size: ${theme.fonts.sizes?.large};
`}
`
export const Paragraph = styled.h3`
 ${({theme}: ThemeInterface) => css`
 font-size: ${theme.fonts.sizes?.xsmall};
 margin-top: 1rem;

 `}
`
export const Date = styled.p`
${({theme}: ThemeInterface) => css`
margin-top: 1rem;
font-size: 1rem;
color: ${theme.colors?.gray}
`}
`
