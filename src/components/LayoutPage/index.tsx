import {Content, ContentInterface} from '../Content/index'
import { Header } from '../Header'
import { SideBar } from '../SideBar'
 const LayouPage = ({children}:ContentInterface) => {
     return(

    <div>
    <Header/>
    <SideBar/>
    <Content>
     {children}
    </Content>
  </div>
     )
}

export default LayouPage;