import styled, {css}from "styled-components";
import {Colors} from "../../styles/theme"
type OpenSideBar = {
    open?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };
export const Container = styled.nav<OpenSideBar>`
${({theme, open}) => css`
background-color: ${theme.colors.black};
width: ${ open ? "200px" : "50px"};
height: 100vh;
position: absolute;
overflow: hidden;
top: 0;
left: 0;
transition: width 0.4s;
`}

`
export const Button = styled.button<OpenSideBar>`
${({theme, onClick}) => css`
/* display: none; */
border: none;
color: ${theme.colors.white};
background-color: ${theme.colors.black};
position: fixed;
top: 8px;
left: 8px;
`}
`
export const Header = styled.header`
${({theme}) => css`
background-color: ${theme.colors.black};
width: 100%;
height: 50px;
`}

`
export const Menu = styled.div`
${({theme}) => css`
background-color: ${theme.colors.black};
width: 100%;
height: 100%;
display: grid;
`}

`
export const MenuLink = styled.a`
${({theme}) => css`
background-color: ${theme.colors.black};
width: 100%;
height: 30px;
display: flex;
color: white;
align-items: center;
`}

`