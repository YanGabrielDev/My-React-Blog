import { Route, Routes } from "react-router-dom"
import { Posts } from "../pages/Posts"
import LayouPage from "../components/LayoutPage"
import { Home } from "../pages/Home"
import { Juninho } from "../pages/Posts/Myposts/juninho"
import { Photos } from "../pages/Photos/index"

function App() {
  return (
    <div>
      <LayouPage>
        <Routes>
          <Route path="/Juninho" element={<Juninho />} />
          <Route path="/" element={<Home />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Photos" element={<Photos />} />
        </Routes>
      </LayouPage>
    </div>
  )
}

export default App
