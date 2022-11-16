import styled, { css } from "styled-components"
import { ThemeInterface } from "../../styles/theme"

export const Title = styled.h1`
  ${({ theme }: ThemeInterface) => css`
    font-size: ${theme.fonts.sizes?.large};
  `}
`

export const Paragraph = styled.p`
  ${({ theme }: ThemeInterface) => css`
    font-size: ${theme.fonts.sizes?.xsmall};
    margin-top: 1rem;
  `}
`

export const ProfileContent = styled.div`
  ${({ theme }: ThemeInterface) => css`
    width: 100%;
    height: ${theme.spacings?.xhuge};
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    @media ${theme.media?.lteMedium} {
      display: block;
      text-align: center;
      height: 15rem;
    }
  `}
`
export const Discription = styled.h2`
  ${({ theme }: ThemeInterface) => css`
    font-size: ${theme.fonts.sizes?.xsmall};
  `}
`
export const ProfilePhoto = styled.img`
  width: auto;
  height: 9rem;
  border-radius: 50%;
  
`
