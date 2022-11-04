import { Content, ContentInterface } from "../Content/index"
import { Header } from "../Header"
import { SideBar } from "../SideBar"
import { useMediaQuery } from "@mui/material"
const LayouPage = ({ children }: ContentInterface) => {
  const matches = useMediaQuery("(min-width:860px)")

  return (
    <div>
      <Header />
      {matches && <SideBar />}
      {children}
    </div>
  )
}

export default LayouPage
