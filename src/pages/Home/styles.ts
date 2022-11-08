import styled, { css } from "styled-components"
import {ThemeInterface} from '../../styles/theme'

export const Title = styled.h1`
 ${({theme}: ThemeInterface) => css`
 font-size: ${theme.fonts.sizes?.large };

 `}
`

export const Paragraph = styled.h3`
 ${({theme}: ThemeInterface) => css`
 font-size: ${theme.fonts.sizes?.xsmall};
 margin-top: 1rem;

 `}
`