import styled, { css } from "styled-components"
import {ThemeInterface} from '../../styles/theme'

export const Title = styled.h1`
 ${({theme}: ThemeInterface) => css`
 font-size: ${theme.fonts.sizes?.large };

 `}
`