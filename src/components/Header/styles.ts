import styled, {css} from "styled-components";

export const Container = styled.header`
${({theme}) =>css`
width: 100%;
height: 50px;
background-color: ${theme.colors.black};
position: fixed;
`}
`