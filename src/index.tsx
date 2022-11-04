import React from "react"
import ReactDOM from "react-dom/client"
import App from "./routes/App"
import { GlobalStyles } from "./styles/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
