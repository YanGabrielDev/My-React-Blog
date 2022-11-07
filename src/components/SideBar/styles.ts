import styled, {css}from "styled-components";
import {ThemeInterface} from "../../styles/theme"
import {Link} from  'react-router-dom'

type OpenSideBar = {
    open?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };
export const Container = styled.nav<OpenSideBar>`
${({theme, open}) => css`
background-color: ${theme.colors.black};
width: ${ open ? "220px" : "50px"};
height: 100vh;
position: fixed;
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
top: 11px;
padding: 3px 12px;
`}
`
export const Header = styled.header`
${({theme}) => css`
background-color: ${theme.colors.black};
width: 100%;
height: 50px;
display: grid;
justify-content: center;
/* position: absolute; */
`}

`
export const Menu = styled.div`
${({theme}) => css`
background-color: ${theme.colors.black};
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`}

`
export const MenuLink = styled(Link)`
${({theme}) => css`
background-color: ${theme.colors.black};
width: 100%;
height: 30px;
display: flex;
gap: 25px;
color: white;
align-items: center;
letter-spacing: 2px;
padding: 3px 12px;
margin-top: 1rem;
text-decoration: none;

&:hover {
      background-color: ${theme.colors.ciano};
    }
`}

`