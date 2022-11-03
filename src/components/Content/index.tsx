import StyledEngine from "@mui/styled-engine"
import { ReactNode } from "react"
import * as Styled from './styles'
export interface ContentInterface{
    children?: ReactNode,
}
export const Content = ({children}: ContentInterface) => {
    return(
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}