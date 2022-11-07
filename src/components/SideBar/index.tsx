import { useState } from "react"
import * as Styled from "./styles"
import { Close, Photo, Home, Menu } from "@mui/icons-material"

export const SideBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Styled.Container open={open}>
      <Styled.Header>
        <Styled.Button onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Menu />}
        </Styled.Button>
      </Styled.Header>
      <Styled.Menu>
        <Styled.MenuLink to={"./"}>
          <Home />
          <h3>Home</h3>
        </Styled.MenuLink>
        <Styled.MenuLink to={"./posts"}>
          <Photo />
          <h3>Photos</h3>
        </Styled.MenuLink>
      </Styled.Menu>
    </Styled.Container>
  )
}
