import { Button, Menu, MenuItem } from "@mui/material"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Posts } from "../pages/Posts"
import LayouPage from "../components/LayoutPage"
import { Home } from "../pages/Home"
import { Content, ContentInterface } from "../components/Content"

function App() {
  return (
    <div>
      <LayouPage>
        <Routes>
          <Route path="/Posts" element={<Posts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </LayouPage>
    </div>
  )
}

export default App
